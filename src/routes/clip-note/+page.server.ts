import { API_ENDPOINT } from '../../config';

export async function load() {
	try {
		const response = await fetch(`${API_ENDPOINT}/v1/clip-note`);
		const data = await response.json();
		return {
			clip_note: data.clip_note,
			errors: []
		};
	} catch (e) {
		return {
			clip_note: [],
			errors: [
				{
					message: 'failed to fetch data'
				}
			]
		};
	}
}
