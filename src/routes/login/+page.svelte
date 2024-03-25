<script lang="ts">
    import { enhance } from "$app/forms";
	import type { ActionData } from "./$types";

    // Set the PageData title property
    export let form: ActionData;
</script>

<div class="card mx-auto max-w-md mt-12 p-4 spacing-2 drop-shadow-sm">
    <h1 class="text-3xl font-bold mb-2">Log In</h1>
    {#if form?.message}
    <p class="alert variant-filled-error mb-2 py-2 px-3">{ form?.message }</p>
    {/if}
    <form method="post" use:enhance class="space-y-2">
        <label class="label">
            <span>Email</span>
            <input name="email" type="email" class="input py-2 px-3" required />
        </label>
        <label class="label">
            <span>Password</span>
            <input name="password" type="password" class="input py-2 px-3" required />
        </label>
        <div class="flex items-center gap-3">
            <button type="submit" class="btn variant-filled-primary">Log in</button>
            <span class="text-primary-300"> or <a href="/register" class="text-primary-500">Register</a></span>
        </div>
    </form>
</div>