// This is displayed as a syntax error in VS Code but compilation works just
// fine. However, removing ".ts" causes a compilation error.
import { expect, test } from './baseFixtures.ts';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Welcome to SvelteKit' })).toBeVisible();
	await expect(page.getByText("This should be six: 6")).toBeVisible();
});
