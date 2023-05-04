import { resetMock } from './setup.js';

export default async function globalTeardown() {
	await resetMock();
}
