import { Locator, Page } from "@playwright/test";
import { RandomUserDetails } from "../helpers/common-helpers";

export class ReservationPage {
readonly page: Page;
readonly reserveNowButton: Locator;
readonly firstNameField: Locator;
readonly lastNameField: Locator;
readonly emailField: Locator;
readonly phoneField: Locator;
readonly returnHomeButton: Locator;


constructor(page: Page) {
    this.page = page;
    this.reserveNowButton = page.getByRole('button', { name: 'Reserve Now' });
    this.firstNameField = page.getByLabel ('Firstname');
    this.lastNameField = page.getByLabel ('Lastname');
    this.emailField = page.getByLabel ('Email');
    this.phoneField = page.getByLabel ('Phone')
    this.returnHomeButton = page.getByRole('link', {name:'Return Home'})
    }

async enterUserDetails(){

    const userDetails = RandomUserDetails();
    const firstName = userDetails.firstName;

    await this.firstNameField.click();
    await this.firstNameField.fill(userDetails.firstName);
    await this.lastNameField.click();
    await this.lastNameField.fill(userDetails.lastName);
    await this.emailField.click();
    await this.emailField.fill (userDetails.email);
    await this.phoneField.click();
    await this.phoneField.fill(userDetails.phoneNumber);

    return firstName;
}
}