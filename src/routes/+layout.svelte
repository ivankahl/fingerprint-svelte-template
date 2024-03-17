<script>
    import { PUBLIC_FINGERPRINT_API_KEY } from '$env/static/public';
    import { FpjsProvider } from '@fingerprintjs/fingerprintjs-pro-svelte';
</script>

<FpjsProvider options={{ loadOptions: { apiKey: PUBLIC_FINGERPRINT_API_KEY } }}>
    <slot />
</FpjsProvider>