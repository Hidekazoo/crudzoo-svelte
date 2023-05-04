import { expect, test } from '@playwright/test';

test.describe('record my weight', () => {
	test('display weight recording form', async ({ page }) => {
		await page.goto('weight');
		await expect(page.getByTestId('weight')).toBeVisible();
		await expect(page.getByTestId('submit')).toBeVisible();
	});

	test.only('Upon entering weight and clicking the submit button, a success alert is displayed when the save is successful.', async ({
		page
	}) => {
		await page.goto('weight');

		const successAlert = page.getByTestId('success');
		await expect(successAlert).not.toBeVisible();

		const weightInputForm = page.getByTestId('weight');
		const submitBtn = page.getByTestId('submit');
		weightInputForm.fill('80');
		submitBtn.click();

		await expect(successAlert).toBeVisible();
	});
});
