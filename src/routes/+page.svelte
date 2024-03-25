<script lang="ts">
	import HeaderMenu from "../components/HeaderMenu.svelte";
	import { page } from '$app/stores';
</script>

<HeaderMenu isAuthenticated={$page.data.isAuthenticated} />
<main class="p-2">
    <h1 class="text-3xl font-bold py-2">Welcome to Fingerprint Auth Demo</h1>
    <p>This demo project shows how you can use Fingerprint to prevent users from registering too many accounts in your Svelte app within a short period of time.</p>
    {#if !$page.data.isAuthenticated}
    <p><a href="/login" class="text-blue-500">Log In</a> or <a href="/register" class="text-blue-500">Register</a> to see how it works.</p>
    {:else}
    <p>You're logged in!</p>
    {/if}
</main>