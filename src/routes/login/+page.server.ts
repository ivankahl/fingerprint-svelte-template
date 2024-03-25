import { lucia } from "$lib/server/auth";
import { db, users } from "$lib/server/db";
import { fail, redirect, type Actions } from "@sveltejs/kit";
import { Argon2id } from "oslo/password";
import { eq } from "drizzle-orm";

export const actions: Actions = {
    default: async (event) => {
        const formData = await event.request.formData();
        const email = formData.get("email");
        const password = formData.get("password");

        if (typeof email !== "string" || email.indexOf("@") === -1) {
            return fail(400, {
                message: "Invalid email"
            });
        }

        if (typeof password !== "string" || password.length < 8 || password.length > 255) {
            return fail(400, {
                message: "Invalid password"
            });
        }

        const user = await getUserByEmail(email);
        if (!user) {
            return fail(400, {
                message: "Incorrect email or password"
            })
        }

        const validPassword = await new Argon2id().verify(user.hashedPassword, password);
        if (!validPassword) {
            return fail(400, {
                message: "Incorrect email or password"
            })
        }

        const session = await lucia.createSession(user.id, {});
        const sessionCookie = lucia.createSessionCookie(session.id);
        event.cookies.set(sessionCookie.name, sessionCookie.value, {
            path: ".",
            ...sessionCookie.attributes
        });

        redirect(302, "/protected");
    }
}

type User = {
    id: string,
    email: string,
    hashedPassword: string,
    createdAt: Date
}

async function getUserByEmail(email: string): Promise<User | null> {
    const result = await db.select().from(users).where(eq(users.username, email));
    if (result.length === 0) return null;

    const user = result[0];
    return { id: user.id, email: user.username, hashedPassword: user.hashedPassword, createdAt: user.createdAt };
}