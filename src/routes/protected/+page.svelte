<script lang="ts">
	import HeaderMenu from "../../components/HeaderMenu.svelte";
	import { page } from '$app/stores';
</script>

<HeaderMenu isAuthenticated={$page.data.isAuthenticated} />
<main class="p-2">
    <h1 class="text-3xl font-bold py-2">Protected</h1>
    <p>You can only access me if you're logged in.</p>
</main>