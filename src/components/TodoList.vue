<script setup lang="ts">
// TodoList.vue
// Main interactive component – manages all todo state and CRUD operations.
// Phase 2: data is persisted in Neon PostgreSQL via Astro API routes.

import { ref, onMounted } from 'vue';
import TodoForm from './TodoForm.vue';

// ---- Types ----
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// ---- State ----
const todos = ref<Todo[]>([]);
const loading = ref(true);
const error = ref('');

// ---- Computed helpers ----
const remaining = () => todos.value.filter(t => !t.completed).length;

// ---- Fetch all todos on mount ----
onMounted(async () => {
  try {
    const res = await fetch('/api/todos');
    if (!res.ok) throw new Error('Failed to load');
    todos.value = await res.json();
  } catch (e) {
    error.value = 'Could not load todos. Check your DATABASE_URL.';
  } finally {
    loading.value = false;
  }
});

// ---- CRUD operations ----

/** Add a new todo */
async function addTodo(title: string) {
  const res = await fetch('/api/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title }),
  });
  if (res.ok) {
    const todo: Todo = await res.json();
    todos.value.push(todo);
  }
}

/** Delete a todo by id */
async function deleteTodo(id: number) {
  const res = await fetch(`/api/todos/${id}`, { method: 'DELETE' });
  if (res.ok) {
    todos.value = todos.value.filter(t => t.id !== id);
  }
}

/** Toggle completed state */
async function toggleTodo(id: number) {
  const todo = todos.value.find(t => t.id === id);
  if (!todo) return;
  const res = await fetch(`/api/todos/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed: !todo.completed }),
  });
  if (res.ok) {
    const updated: Todo = await res.json();
    todo.completed = updated.completed;
  }
}

/** Inline edit – prompt the user for a new title */
async function editTodo(id: number) {
  const todo = todos.value.find(t => t.id === id);
  if (!todo) return;
  const newTitle = window.prompt('Edit todo:', todo.title);
  if (!newTitle || !newTitle.trim()) return;
  const res = await fetch(`/api/todos/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: newTitle.trim() }),
  });
  if (res.ok) {
    const updated: Todo = await res.json();
    todo.title = updated.title;
  }
}
</script>

<template>
  <div class="todo-card">
    <!-- Header bar -->
    <div class="card-header">
      <span class="badge">{{ remaining() }} remaining</span>
    </div>

    <!-- Add-todo form -->
    <TodoForm @add="addTodo" />

    <!-- Loading state -->
    <p v-if="loading" class="empty-msg">⏳ Loading...</p>

    <!-- Error state -->
    <p v-else-if="error" class="error-msg">⚠️ {{ error }}</p>

    <!-- Empty state -->
    <p v-else-if="todos.length === 0" class="empty-msg">
      🎉 Nothing left to do!
    </p>

    <!-- Todo list -->
    <ul v-else class="todo-list" role="list">
      <li
        v-for="todo in todos"
        :key="todo.id"
        class="todo-item"
        :class="{ completed: todo.completed }"
      >
        <!-- Checkbox to toggle completion -->
        <input
          type="checkbox"
          :checked="todo.completed"
          :aria-label="`Mark '${todo.title}' as ${todo.completed ? 'incomplete' : 'complete'}`"
          @change="toggleTodo(todo.id)"
          class="todo-checkbox"
        />

        <!-- Title -->
        <span class="todo-title">{{ todo.title }}</span>

        <!-- Actions -->
        <div class="todo-actions">
          <button
            class="btn-edit"
            title="Edit todo"
            @click="editTodo(todo.id)"
            aria-label="Edit todo"
          >
            ✏️
          </button>
          <button
            class="btn-delete"
            title="Delete todo"
            @click="deleteTodo(todo.id)"
            aria-label="Delete todo"
          >
            🗑️
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* ---- Card shell ---- */
.todo-card {
  background: #ffffff;
  border-radius: 14px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  padding: 1.5rem;
}

/* ---- Header ---- */
.card-header {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
}

.badge {
  background: #eef2ff;
  color: #4f46e5;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
}

/* ---- Empty state ---- */
.empty-msg {
  text-align: center;
  color: #9ca3af;
  padding: 1.5rem 0;
  font-size: 1.05rem;
}

/* ---- Error state ---- */
.error-msg {
  text-align: center;
  color: #ef4444;
  padding: 1.5rem 0;
  font-size: 1.05rem;
}

/* ---- List ---- */
.todo-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* ---- Item ---- */
.todo-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  transition: box-shadow 0.15s;
}

.todo-item:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.todo-item.completed .todo-title {
  text-decoration: line-through;
  color: #9ca3af;
}

/* ---- Checkbox ---- */
.todo-checkbox {
  width: 1.1rem;
  height: 1.1rem;
  accent-color: #4f46e5;
  flex-shrink: 0;
  cursor: pointer;
}

/* ---- Title ---- */
.todo-title {
  flex: 1;
  font-size: 0.97rem;
  word-break: break-word;
}

/* ---- Actions ---- */
.todo-actions {
  display: flex;
  gap: 0.35rem;
}

.btn-edit,
.btn-delete {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.25rem 0.4rem;
  border-radius: 6px;
  transition: background 0.15s;
  line-height: 1;
}

.btn-edit:hover  { background: #eef2ff; }
.btn-delete:hover { background: #fef2f2; }
</style>
