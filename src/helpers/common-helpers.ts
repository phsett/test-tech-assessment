import { Page } from "@playwright/test";
import { BASE_URL } from "../constants/constants";


export async function adminLogIn(page: Page) {
    await page.goto(BASE_URL);
    await page.getByRole('link', { name: 'Admin', exact: true }).click()
    await page.getByRole('textbox', { name: 'Username' }).fill('admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('password');
    await page.getByRole('button', { name: 'Login' }).click();
}

export async function adminReportLogIn(page: Page) {
    await page.goto(BASE_URL);
    await page.getByRole('link', { name: 'Admin', exact: true }).click()
    await page.getByRole('textbox', { name: 'Username' }).fill('admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('password');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'Report' }).click();
}

export async function adminMessagesLogIn(page: Page) {
    await page.goto(BASE_URL);
    await page.getByRole('link', { name: 'Admin', exact: true }).click()
    await page.getByRole('textbox', { name: 'Username' }).fill('admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('password');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'Messages' }).click();
}
