// src/lib/db.ts
// Shared Neon database client factory.

import { neon } from '@neondatabase/serverless';

export function getDb() {
  const url = import.meta.env.DATABASE_URL;
  if (!url) throw new Error('DATABASE_URL is not set');
  return neon(url);
}
