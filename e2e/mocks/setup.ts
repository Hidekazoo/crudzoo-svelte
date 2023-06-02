import fetch from 'node-fetch';

const API_ENDPOINT = process.env.API_ENDPOINT;

export async function resetMockCommonMappings() {
	await resetMock();
	await setupMock();
}

export async function setupMock() {
	await fetch(`${API_ENDPOINT}/__admin/mappings`, {
		method: 'POST',
		body: JSON.stringify({
			request: {
				method: 'GET',
				url: '/v1/health'
			},
			response: {
				status: 200,
				jsonBody: {
					status: 'success'
				},
				headers: {
					'Content-Type': 'application/json'
				}
			}
		})
	});
	await fetch(`${API_ENDPOINT}/__admin/mappings`, {
		method: 'POST',
		body: JSON.stringify({
			request: {
				method: 'OPTIONS',
				urlPattern: '.*'
			},
			response: {
				status: 200,
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Methods': '*',
					'Access-Control-Allow-Headers': '*'
				}
			}
		})
	});
	setupClipNoteMock();
}

export async function setupMockHealthCheckNg() {
	await fetch(`${API_ENDPOINT}/__admin/mappings`, {
		method: 'POST',
		body: JSON.stringify({
			request: {
				method: 'GET',
				url: '/v1/health'
			},
			response: {
				status: 200,
				jsonBody: {
					status: 'fail'
				},
				headers: {
					'Content-Type': 'application/json'
				}
			}
		})
	});
}

export async function resetMock() {
	await fetch(`${API_ENDPOINT}/__admin/mappings/reset`, {
		method: 'POST'
	});
}

export async function setupClipNoteMock() {
	await fetch(`${API_ENDPOINT}/__admin/mappings`, {
		method: 'POST',
		body: JSON.stringify({
			request: {
				method: 'GET',
				url: '/v1/clip-note'
			},
			response: {
				status: 200,
				jsonBody: {
					clip_note: [
						{
							id: 1,
							url: 'https://example.com'
						}
					]
				},
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Methods': '*',
					'Access-Control-Allow-Headers': '*'
				}
			}
		})
	});
}
