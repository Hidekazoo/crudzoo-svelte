import { expect, test } from '@playwright/test';
import { resetMockCommonMappings, setupMockHealthCheckNg } from './mocks/setup.js';

test.describe('ClipNote Page', () => {
	test('abount page has expected h1', async ({ page }) => {
		await page.goto('clip-note');
		await expect(page.getByRole('heading', { name: 'Clip Note' })).toBeVisible();
	});

	test('verify that the ClipNote is displayed', async ({ page }) => {
		await page.goto('clip-note');
		await expect(page.getByTestId('clip-note')).toHaveText('https://example.com');
	});
});
