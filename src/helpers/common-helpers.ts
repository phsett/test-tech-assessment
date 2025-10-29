import { Locator, Page } from "@playwright/test";
import { faker } from '@faker-js/faker';


export async function adminLogIn(page: Page) {
    await page.goto('https://automationintesting.online/');
    await page.getByRole('link', { name: 'Admin', exact: true }).click()
    await page.getByRole('textbox', { name: 'Username' }).fill('admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('password');
    await page.getByRole('button', { name: 'Login' }).click();
}

export async function adminReportLogIn(page: Page) {
    await page.goto('https://automationintesting.online/');
    await page.getByRole('link', { name: 'Admin', exact: true }).click()
    await page.getByRole('textbox', { name: 'Username' }).fill('admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('password');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'Report' }).click();
}

export async function adminMessagesLogIn(page: Page) {
    await page.goto('https://automationintesting.online/');
    await page.getByRole('link', { name: 'Admin', exact: true }).click()
    await page.getByRole('textbox', { name: 'Username' }).fill('admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('password');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'Messages' }).click();
}

export function RandomUserDetails() {
    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email :faker.internet.email(),
        phoneNumber: faker.phone.number(),
    };
}
