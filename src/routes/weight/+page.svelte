<script>
	import FormInput from '../../components/FormInput.svelte';
</script>

<form>
	<FormInput id="weight" value="" placeholder="80" label="体重を入力する" testid="weight" />
	<button class="btn" data-testid="submit">登録</button>
</form>
