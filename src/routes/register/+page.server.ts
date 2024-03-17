import { redirect, type Actions } from "@sveltejs/kit";
import { registerUser } from "$lib/authService";

export const actions: Actions = {
    default: async (event) => {
        const formData = await event.request.formData();
        const email = await formData.get("email")?.toString();
        const password = await formData.get("password")?.toString();
        const visitorId = await formData.get("visitorId")?.toString();
        const requestId = await formData.get("requestId")?.toString();

        console.log("email", email);
        console.log("password", password);
        console.log("visitorId", visitorId);
        console.log("requestId", requestId);

        if (!email || !password || !visitorId || !requestId) {
            return {
                email,
                error: "Invalid form data"
            }
        }

        try {
            await registerUser(email, password, visitorId);
        } catch (error) {
            return {
                email,
                error: (error as Error).message
            }
        }

        redirect(302, "/login");
    }
}