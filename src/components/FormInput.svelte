<script>
	export let id = '';
	export let value = '';
	export let placeholder = '';
	export let label = '';
	export let testid = '';
</script>

<label class="label" for={id}>
	<span class="label-text">{label}</span>
</label>
<input
	{id}
	type="text"
	{placeholder}
	class="input input-bordered w-full max-w-xs"
	bind:value
	data-testid={testid}
/>
