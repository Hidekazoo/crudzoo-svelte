import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	},
	testDir: 'e2e',
	use: {
		headless: true
	},
	globalSetup: './e2e/mocks/global-setup',
	globalTeardown: './e2e/mocks/global-teardown'
};

export default config;
