import { Page } from "@playwright/test";
import { BASE_URL } from "../constants/constants";

//Common helper function for admin login used across multiple test files
export async function adminLogin(page: Page) {
  await page.goto(BASE_URL);
  await page.getByRole("link", { name: "Admin", exact: true }).click();
  await page.getByRole("textbox", { name: "Username" }).fill("admin");
  await page.getByRole("textbox", { name: "Password" }).fill("password");
  await page.getByRole("button", { name: "Login" }).click();
}
