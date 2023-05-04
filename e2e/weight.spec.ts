import { expect, test } from '@playwright/test';

test.describe('record my weight', () => {
	test.only('display weight recording form', async ({ page }) => {
		await page.goto('weight');
		await expect(page.getByTestId('weight')).toBeVisible();
		await expect(page.getByTestId('submit')).toBeVisible();
	});
});
