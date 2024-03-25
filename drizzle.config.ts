import type { Config } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config();

export default {
    schema: "src/lib/server/db/schema.ts",
    out: "src/lib/server/db/migrations",
    driver: "pg",
    dbCredentials: {
        database: process.env.DB_NAME ?? "",
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST ?? "",
        port: parseInt(process.env.DB_PORT ?? "5432")
    }
} satisfies Config;