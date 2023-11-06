import { expect, test } from '@playwright/test';

// just testing Playwright, run with npm run test:integration
test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'DuckShop', level: 1 })).toBeVisible();
});
