<script lang="ts">
	import { useVisitorData } from "@fingerprintjs/fingerprintjs-pro-svelte";

    export let form: import('./$types').ActionData;

    const { data: visitorData } = useVisitorData({ extendedResult: true }, { immediate: true });
    console.log(form);
    let email: string = form?.email || "";
    let password: string = "";
    let confirmPassword: string = "";

    // Form validation
    $: emailError = !email ? "Email is required" : "";
    $: passwordError = !password 
        ? "Password is required" 
        : password.length < 8 
            ? "Password must be at least 8 characters" 
            : "";
    $: confirmPasswordError = password !== confirmPassword ? "Passwords do not match" : "";

    // Can only submit the form if all the fields have no errors and the visitor and request ID are present
    $: canRegister = !emailError && !passwordError && !confirmPasswordError && $visitorData;
</script>

<div class="auth-card">
    <h2>Register</h2>
    {#if form?.error}
        <p class="general-error">{form.error}</p>
    {/if}
    <form method="POST" class="auth-form">
        <label>
            Email<br/>
            <input name="email" type="email" bind:value={email} />
            <p class="form-error">{emailError}</p>
        </label>
        
        <label>
            Password<br/>
            <input name="password" type="password" bind:value={password} />
            <p class="form-error">{passwordError}</p>
        </label>
        
        <label>
            Confirm Password<br/>
            <input name="confirmPassword" type="password" bind:value={confirmPassword} />
            <p class="form-error">{confirmPasswordError}</p>
        </label>

        <input type="hidden" name="visitorId" value={$visitorData?.visitorId} />
        <input type="hidden" name="requestId" value={$visitorData?.requestId} />

        <input type="submit" value="Register" disabled={!canRegister} />
    </form>
</div>

<style>
* {
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

.auth-card {
    max-width: 300px;
    margin: 3em auto 0 auto;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.auth-card h2 {
    margin-top: 0;
    padding: 1rem 0;
    text-align: center;
}

.auth-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

p.form-error {
    color: red;
    font-size: 0.8rem;
    margin: 0;
}

p.general-error {
    background-color: #f8d7da;
    padding: 0.5rem;
    border-radius: 5px;
    color: #721c24;
    font-weight: bold;
    font-size: 0.8rem;
    border: 1px solid #f5c6cb;
}

input[type="email"], input[type="password"] {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
}

input[type="submit"] {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
}

input[type="submit"]:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}
</style>