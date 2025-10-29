import { Locator, Page, expect } from "@playwright/test";
import { fullName, userDetails } from "../constants/constants";
import { adminLogin } from "../helpers/common-helpers";

export class AdminMessagesPage {
  readonly page: Page;
  readonly MessagesTab: Locator;
  readonly nextButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.MessagesTab = page.getByRole("link", { name: "Messages" });
    this.nextButton = page.getByRole("button", { name: "Next" });
  }

  async verifyMessageReceived() {
    await adminLogin(this.page);
    await this.MessagesTab.click();
    await expect(this.page.getByText(fullName)).toBeVisible();
  }

  async checkMessageContent() {
    await this.page.getByText(fullName).click();
    await expect(this.page.getByText(userDetails.phoneNumber)).toBeVisible();
    await expect(this.page.getByText(userDetails.email)).toBeVisible();
    await expect(this.page.getByText("This is a test message")).toBeVisible();
  }
}
