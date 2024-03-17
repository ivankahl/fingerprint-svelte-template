import { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } from '$env/static/private';

import type { QueryResult } from 'pg';
import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
    host: DB_HOST,
    port: parseInt(DB_PORT || "5432"),
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASSWORD
});

export const query = async (text: string, values?: unknown[]): Promise<QueryResult> => {
    const client = await pool.connect();
    try {
        return await client.query(text, values);
    } finally {
        client.release();
    }
}