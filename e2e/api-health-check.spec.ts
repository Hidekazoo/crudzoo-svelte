import { expect, test } from '@playwright/test';
import {
	resetMockCommonMappings,
	setupMockHealthCheckNg
} from './mocks/setup.js';

test.describe('Health Check', () => {

	test('about page has expected h1', async ({ page }) => {
		await page.goto('health');
		await expect(page.getByRole('heading', { name: 'Health Check' })).toBeVisible();
	});

	test('verify that the bff health check is ng', async ({ page }) => {
		await setupMockHealthCheckNg();
		await page.goto('health');
		await expect(page.getByTestId('health-check')).toHaveText('ng');
		await resetMockCommonMappings();
	});

	test('verify that the bff health check is ok', async ({ page }) => {
		await page.goto('health');
		await expect(page.getByTestId('health-check')).toHaveText('ok');
	});
});
