import { redirect } from "@sveltejs/kit";
import { lucia } from "$lib/server/auth";

export const GET = async (event) => {
    if (!event.locals.session?.id) {
        redirect(302, '/');
    }

    try {
        await lucia.invalidateSession(event.locals.session.id);
    } catch (e) {
        console.error(e);
        return new Response("Error logging out", { status: 500 });
    }

    redirect(302, '/');
};