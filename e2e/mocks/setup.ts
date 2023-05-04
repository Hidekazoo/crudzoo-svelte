import fetch from 'node-fetch';

const API_ENDPOINT = 'http://localhost:8080';

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
