import { expect, test } from '@playwright/test';

test.describe('issues Page', () => {
	test('issues page has expected h1', async ({ page }) => {
		await page.goto('issues');
		await expect(page.getByRole('heading', { name: '課題' })).toBeVisible();
	});
});

test.describe('課題個別ページ', () => {
	test('課題個別ページにアクセスできる', async ({ page }) => {
		await page.goto('issues/ed32add0-fa48-46ed-ba5a-ab39631e3c79');
		await expect(page.getByRole('heading', { name: '課題個別ページ' })).toBeVisible();
	});
});
