// src/pages/api/todos/[id].ts
// PATCH  /api/todos/:id  – update title and/or completed
// DELETE /api/todos/:id  – delete a todo

import type { APIRoute } from 'astro';
import { getDb } from '../../../lib/db';

export const PATCH: APIRoute = async ({ params, request }) => {
  const id = Number(params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return new Response(JSON.stringify({ error: 'Invalid id' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  try {
    const body = await request.json();
    const sql = getDb();

    let row: Record<string, unknown> | undefined;

    if (body.title !== undefined && body.completed !== undefined) {
      [row] = await sql`
        UPDATE todos SET title = ${String(body.title).trim()}, completed = ${Boolean(body.completed)}
        WHERE id = ${id} RETURNING id, title, completed
      `;
    } else if (body.title !== undefined) {
      [row] = await sql`
        UPDATE todos SET title = ${String(body.title).trim()}
        WHERE id = ${id} RETURNING id, title, completed
      `;
    } else if (body.completed !== undefined) {
      [row] = await sql`
        UPDATE todos SET completed = ${Boolean(body.completed)}
        WHERE id = ${id} RETURNING id, title, completed
      `;
    } else {
      return new Response(JSON.stringify({ error: 'Nothing to update' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!row) {
      return new Response(JSON.stringify({ error: 'Not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    return new Response(JSON.stringify(row), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Failed to update todo' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const DELETE: APIRoute = async ({ params }) => {
  const id = Number(params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return new Response(JSON.stringify({ error: 'Invalid id' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  try {
    const sql = getDb();
    const [row] = await sql`DELETE FROM todos WHERE id = ${id} RETURNING id`;
    if (!row) {
      return new Response(JSON.stringify({ error: 'Not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    return new Response(null, { status: 204 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Failed to delete todo' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
