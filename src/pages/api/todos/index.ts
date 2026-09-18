// src/pages/api/todos/index.ts
// GET  /api/todos  – list all todos
// POST /api/todos  – create a new todo

import type { APIRoute } from 'astro';
import { getDb } from '../../../lib/db';

// Ensure the todos table exists once per cold-start, not on every request.
let tableReady = false;
async function ensureTable() {
  if (tableReady) return;
  const sql = getDb();
  await sql`
    CREATE TABLE IF NOT EXISTS todos (
      id         SERIAL PRIMARY KEY,
      title      TEXT         NOT NULL,
      completed  BOOLEAN      NOT NULL DEFAULT false,
      created_at TIMESTAMPTZ  NOT NULL DEFAULT NOW()
    )
  `;
  tableReady = true;
}

export const GET: APIRoute = async () => {
  try {
    await ensureTable();
    const sql = getDb();
    const rows = await sql`SELECT id, title, completed FROM todos ORDER BY created_at ASC`;
    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Failed to fetch todos' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const { title } = await request.json();
    if (!title || typeof title !== 'string' || !title.trim()) {
      return new Response(JSON.stringify({ error: 'Title is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    await ensureTable();
    const sql = getDb();
    const [row] = await sql`
      INSERT INTO todos (title) VALUES (${title.trim()})
      RETURNING id, title, completed
    `;
    return new Response(JSON.stringify(row), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Failed to create todo' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
