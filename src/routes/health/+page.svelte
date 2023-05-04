<script>
	export let data;
</script>

<h1 class="">Health Check</h1>

<div class="overflow-x-auto">
	<table class="table w-full">
		<thead>
			<tr>
				<th />
				<th>Name</th>
				<th>Status</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>1</th>
				<td>bff</td>
				<td data-testid='health-check'>{data.status}</td>
			</tr>
		</tbody>
	</table>
</div>
