export async function load({ fetch }) {
	try {
		const res = await fetch('http://localhost:8080/v1/health');
		const data = await res.json();
		return { status: data.status === 'success' ? 'ok' : 'ng' };
	} catch (e) {
		return { status: 'failed to connect' };
	}
}

export const ssr = true;
