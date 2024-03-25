import { fail, redirect, type ActionFailure, type Actions } from "@sveltejs/kit";
import { lucia } from "$lib/server/auth";
import { generateId } from "lucia";
import { Argon2id } from "oslo/password";
import { db, users } from "$lib/server/db";
import { eq } from "drizzle-orm";

type ValidationCheckResult = ActionFailure<{ message: string }> | void;

export const ssr = false;

export const actions: Actions = {
    default: async (event) => {
        const formData = await event.request.formData();
        const email = formData.get("email");
        const password = formData.get("password");

        if (!email || typeof email !== "string" || email.indexOf("@") === -1) {
            return fail(400, {
                message: "Invalid email"
            });
        }

        if (!password || typeof password !== "string" || password.length < 8 || password.length > 255) {
            return fail(400, {
                message: "Invalid password"
            });
        }

        const userExists = await checkUserExists(email);
        if (userExists) return userExists;

        const userId = await registerUser(email, password);

        const session = await lucia.createSession(userId, {});
        const sessionCookie = lucia.createSessionCookie(session.id);
        event.cookies.set(sessionCookie.name, sessionCookie.value, {
            path: ".",
            ...sessionCookie.attributes
        });

        redirect(302, "/protected");
    }
}

/**
 * Checks if the user already exists in the database and, if they do, returns an error.
 * @param email The email address of the new user registering that will be checked
 * @returns An error if the user already exists, otherwise void
 */
async function checkUserExists(email: string): Promise<ValidationCheckResult>{
    const existingUsers = await db.select().from(users).where(eq(users.username, email));

    if (existingUsers.length > 0) {
        return fail(400, {
            message: "You are already registered. Please log in."
        });
    }
}

/**
 * Registers a new user in the database.
 * @param email The email address of the new user registering
 * @param password The password of the new user registering
 * @returns The ID of the newly registered user
 */
async function registerUser(email: string, password: string): Promise<string> {
    const userId = generateId(15);
    const hashedPassword = await new Argon2id().hash(password);

    await db.insert(users)
        .values({
            id: userId,
            username: email,
            hashedPassword: hashedPassword,
            createdAt: new Date()
        });

    return userId;
}
