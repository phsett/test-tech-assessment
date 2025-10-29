import { Locator, Page, expect } from "@playwright/test";
import { BASE_URL, fullName, userDetails } from "../constants/constants";

export class HomePage {
  readonly page: Page;
  readonly checkAvailabilityButton: Locator;
  readonly checkInDateField: Locator;
  readonly checkOutDateField: Locator;
  readonly checkInDateSelector: Locator;
  readonly checkOutDateSelector: Locator;
  readonly nextMonthButton: Locator;
  readonly previousMonthButton: Locator;
  readonly bookRoomButton: Locator;
  readonly nameField: Locator;
  readonly emailField: Locator;
  readonly phoneField: Locator;
  readonly SubjectField: Locator;
  readonly messageField: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkAvailabilityButton = page.getByRole("button", {
      name: "Check Availability",
    });
    this.checkInDateField = page
      .locator("#booking .col-md-6")
      .getByRole("textbox")
      .nth(0);
    this.checkInDateSelector = page.locator(".react-datepicker__day--023");
    this.checkOutDateSelector = page.locator(".react-datepicker__day--025");
    this.nextMonthButton = page.getByRole("button", { name: "Next Month" });
    this.previousMonthButton = page.getByRole("button", {
      name: "Previous Month",
    });
    this.checkOutDateField = page.getByRole("textbox").nth(1);
    this.bookRoomButton = page
      .locator("#rooms .col-md-6.col-lg-4")
      .getByRole("link", { name: "Book Now" });
    this.nameField = page.getByTestId("ContactName");
    this.emailField = page.getByTestId("ContactEmail");
    this.phoneField = page.getByTestId("ContactPhone");
    this.SubjectField = page.getByTestId("ContactSubject");
    this.messageField = page.getByTestId("ContactDescription");
    this.submitButton = page.getByRole("button", { name: "Submit" });
  }

  async goToURL() {
    await this.page.goto(BASE_URL);
  }

  async enterCheckInDate() {
    await this.checkInDateField.click();
    await this.nextMonthButton.click();
    await this.checkInDateSelector.click();
  }
  async enterCheckOutDate() {
    await this.checkOutDateField.click();
    await this.nextMonthButton.click();
    await this.checkOutDateSelector.click();
  }

  async clickBookRoomButton() {
    await this.bookRoomButton.first().click();
  }

  async createContactMessage() {
    await this.nameField.fill(fullName);
    await this.emailField.fill(userDetails.email);
    await this.phoneField.fill(userDetails.phoneNumber);
    await this.SubjectField.fill("Test Subject");
    await this.messageField.fill("This is a test message.");
    await this.submitButton.click();
  }

  async submitContactFormWithMissingDetails() {
    await this.submitButton.click();
  }

  async contactFormValidationErrors() {
    await expect(this.page.getByText("Message may not be blank")).toBeVisible();
    await expect(
      this.page.getByText("Message must be between 20 and 2000 characters")
    ).toBeVisible();
    await expect(
      this.page.getByText("Subject must be between 5 and 100 characters")
    ).toBeVisible();
    await expect(this.page.getByText("Email may not be blank")).toBeVisible();
    await expect(this.page.getByText("Phone may not be blank")).toBeVisible();
    await expect(
      this.page.getByText("Phone must be between 11 and 21 characters")
    ).toBeVisible();
    await expect(this.page.getByText("Name may not be blank")).toBeVisible();
    await expect(this.page.getByText("Subject may not be blank")).toBeVisible();
  }

  async emailErrorMessage() {
    await this.nameField.fill(fullName);
    await this.emailField.fill("teststringemail");
    await this.phoneField.fill(userDetails.phoneNumber);
    await this.SubjectField.fill("Email Subject");
    await this.messageField.fill("This is a test message.");
    await this.submitButton.click();
  }

  async emailValidationError() {
    await expect(
      this.page.getByText("must be a well-formed email address")
    ).toBeVisible();
  }
}
