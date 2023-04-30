<script>
	export let id = '';
	export let value = '';
	export let placeholder = '';
</script>

<label class="label" for={id}>
	<span class="label-text">{placeholder}</span>
</label>
<input
	{id}
	type="text"
	placeholder="Type here"
	class="input input-bordered w-full max-w-xs"
	bind:value
/>
