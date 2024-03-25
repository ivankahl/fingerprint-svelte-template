import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("user", {
    id: text("id").primaryKey(),
    username: text("username").unique().notNull(),
    hashedPassword: text("hashed_password").notNull(),
    createdAt: timestamp("created_at", {
        withTimezone: true,
        mode: "date"
    }).notNull()
});

export const sessions = pgTable("session", {
    id: text("id").primaryKey(),
    userId: text("user_id")
        .notNull()
        .references(() => users.id),
    expiresAt: timestamp("expires_at", {
        withTimezone: true,
        mode: "date"
    }).notNull()
});

export const schema = { users, sessions };