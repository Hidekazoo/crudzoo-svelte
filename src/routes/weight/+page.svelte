<script>
	import FormInput from '../../components/FormInput.svelte';

	let weight = '';
	let successfully = false;
	const API_ENDPOINT = 'http://localhost:8080';
	async function handleSubmit(event) {
		event.preventDefault();
		successfully = false;
		const response = await fetch(`${API_ENDPOINT}/v1/weight`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ weight })
		});

		if (response.ok) {
			console.log('Weight successfully recorded');
			successfully = true;
		} else {
			console.error('Error recording weight');
			successfully = false;
		}
	}
</script>

{#if successfully}
	<div class="alert alert-success shadow-lg" data-testid="success">
		<div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="stroke-current flex-shrink-0 h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
				/></svg
			>
			<span>Your purchase has been confirmed!</span>
		</div>
	</div>
{/if}
<form on:submit={handleSubmit}>
	<FormInput
		id="weight"
		bind:value={weight}
		placeholder="80"
		label="体重を入力する"
		testid="weight"
	/>
	<button class="btn" data-testid="submit">登録</button>
</form>
