<script setup lang="ts">
// TodoForm.vue
// Simple form to add a new todo item.
// Emits an 'add' event with the trimmed title string.

import { ref } from 'vue';

const emit = defineEmits<{
  (e: 'add', title: string): void;
}>();

const input = ref('');

function handleSubmit() {
  const title = input.value.trim();
  if (!title) return;
  emit('add', title);
  input.value = '';
}
</script>

<template>
  <form class="todo-form" @submit.prevent="handleSubmit">
    <input
      v-model="input"
      type="text"
      placeholder="What needs to be done?"
      class="todo-input"
      aria-label="New todo title"
      maxlength="200"
    />
    <button type="submit" class="btn-add" :disabled="!input.trim()">
      Add
    </button>
  </form>
</template>

<style scoped>
.todo-form {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}

.todo-input {
  flex: 1;
  padding: 0.65rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
}

.todo-input:focus {
  border-color: #4f46e5;
}

.btn-add {
  padding: 0.65rem 1.2rem;
  background: #4f46e5;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-add:hover:not(:disabled) {
  background: #4338ca;
}

.btn-add:disabled {
  background: #a5b4fc;
  cursor: not-allowed;
}
</style>
