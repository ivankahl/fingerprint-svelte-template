<script lang="ts">
    export let isAuthenticated = false;
</script>

<header class="flex gap-1 items-center p-2 bg-primary-500 text-white drop-shadow-md">
    <a href="/" class="text-white px-3 py-2 rounded-md font-bold hover:bg-primary-600">Auth Demo App</a>
    <div class="flex-grow"></div>
    {#if isAuthenticated}
        <a href="/protected" class="text-white px-3 py-2 rounded-md hover:bg-primary-600">Protected</a>
        <a href="/logout" class="text-white px-3 py-2 rounded-md hover:bg-primary-600">Logout</a>
    {:else}
        <a href="/login" class="text-white px-3 py-2 rounded-md hover:bg-primary-600">Login</a>
        <a href="/register" class="text-white px-3 py-2 rounded-md hover:bg-primary-600">Register</a>
    {/if}
</header>