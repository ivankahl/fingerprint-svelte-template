import { Lucia } from "lucia";
import { dev } from "$app/environment";
import { DB_HOST, DB_USER, DB_NAME, DB_PORT, DB_PASSWORD } from "$env/static/private";
import pg from "pg";
import { NodePostgresAdapter } from "@lucia-auth/adapter-postgresql";

const pool = new pg.Pool({
    host: DB_HOST,
    port: parseInt(DB_PORT ?? "5432"),
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASSWORD,
});

const adapter = new NodePostgresAdapter(pool, {
    session: "user_sessions",
    user: "users",
});

export const lucia = new Lucia(adapter, {
    sessionCookie: {
        attributes: {
            secure: !dev
        }
    },
    getUserAttributes: (attributes) => {
        return {
            username: attributes.username,
            visitorId: attributes.visitor_id,
            createdAt: attributes.created_at
        };
    }
});

declare module "lucia" {
    interface Register {
        Lucia: typeof lucia;
        DatabaseUserAttributes: DatabaseUserAttributes;
    }
}

interface DatabaseUserAttributes {
    username: string,
    visitor_id: string,
    created_at: Date
}