export const load = async (event) => {
    const isAuthenticated = event.locals.user !== null;

    return {
        isAuthenticated,
    }
}