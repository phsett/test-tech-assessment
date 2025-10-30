import { Page } from "@playwright/test";
import { BASE_URL, adminUser } from "../constants/constants";

//Common helper function for admin login used across multiple test files
export async function adminLogin(page: Page) {
  await page.goto(BASE_URL);
  await page.getByRole("link", { name: "Admin", exact: true }).click();
  await page.getByRole("textbox", { name: "Username" }).fill(adminUser.username);
  await page.getByRole("textbox", { name: "Password" }).fill(adminUser.password);
  await page.getByRole("button", { name: "Login" }).click();
}
