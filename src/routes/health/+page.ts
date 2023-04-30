export async function load({ fetch }) {
	try {
		const res = await fetch('');
		const data = await res.json();
		return { status: data.status === 'success' ? 'ok' : 'fail' };
	} catch (e) {
		return { status: 'fail' };
	}
}
