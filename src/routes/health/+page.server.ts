import { API_ENDPOINT } from '../../config';

export async function load() {
	try {
		const res = await fetch(`${API_ENDPOINT}/v1/health`);
		const data = await res.json();
		return { status: data.status === 'success' ? 'ok' : 'ng' };
	} catch (e) {
		return { status: 'failed to connect' };
	}
}

export const ssr = true;
