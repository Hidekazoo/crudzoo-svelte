<script>
	export let data;
</script>

<h1>Clip Note</h1>

<div class="overflow-x-auto">
	{#each data.errors as error (error)}
		<div>{error.message}</div>
	{/each}
	<table class="table">
		<thead>
			<tr>
				<th />
				<th>url</th>
			</tr>
		</thead>
		<tbody>
			{#each data.clip_note as item (item)}
				<tr>
					<th>1</th>
					<td data-testid="clip-note">{item.url}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
