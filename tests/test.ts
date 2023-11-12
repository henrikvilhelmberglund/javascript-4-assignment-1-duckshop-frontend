import { expect, test, type ElementHandle, type Page, type BrowserContext } from '@playwright/test';

// just testing Playwright, run with npm run test:playwright

test.describe('DuckShop happy path', async () => {
	test.describe.configure({ mode: 'serial' });
	test.beforeEach(() => test.setTimeout(2000));
	let context: BrowserContext;
	let page: Page;
	test.beforeAll(async ({ browser }) => {
		// Create a shared context and page for the entire test suite
		context = await browser.newContext();
		page = await context.newPage();
	});

	test('go to index', async () => {
		await page.goto('/');
	});

	test('index page has expected h1', async () => {
		await expect(page.getByRole('heading', { name: "'DuckShop'", level: 1 })).toBeVisible();
	});

	test('click duck painting', async () => {
		// Click the link with the text "Duck Painting" in an h3 tag
		const link = await page.getByText('Duck painting');
		console.log(link);

		await link.click();
	});

	test('click add to cart button twice', async () => {
		// Perform actions on the next page
		// Click the "Add to cart" button twice
		const addToCartButton = (await page.$('button:has-text("Add to cart")')) as ElementHandle<HTMLAnchorElement>;
		for (let i = 0; i < 2; i++) {
			await addToCartButton.click();
		}
	});
	test('view cart', async () => {
		// Click the "View cart" button
		const viewCartButton = (await page.$('button:has-text("View cart")')) as ElementHandle<HTMLButtonElement>;
		expect(viewCartButton).toBeTruthy(); // Check if the button is found
		await viewCartButton.click();
	});
});
