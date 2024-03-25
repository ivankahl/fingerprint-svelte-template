import { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } from '$env/static/private';
import { drizzle } from 'drizzle-orm/node-postgres';
import { schema } from './schema';
import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
    host: DB_HOST,
    port: parseInt(DB_PORT || "5432"),
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASSWORD
});

export const db = drizzle(pool, { schema });
export * from './schema';