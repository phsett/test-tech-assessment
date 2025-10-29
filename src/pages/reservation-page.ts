import { Locator, Page, expect } from "@playwright/test";
import { userDetails } from "../constants/constants";

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

    await this.firstNameField.fill(userDetails.firstName);
    await this.lastNameField.fill(userDetails.lastName);
    await this.emailField.fill (userDetails.email);
    await this.phoneField.fill(userDetails.phoneNumber);

}

async bookingSuccessful(){
    await expect (this.page.getByText('Booking Confirmed')).toBeVisible();
}

async reservationValidationErrors(){
    await expect (this.page.getByText('must not be empty').first()).toBeVisible();
    await expect (this.page.getByText('Lastname should not be blank')).toBeVisible();
    await expect (this.page.getByText('Firstname should not be blank')).toBeVisible();
    await expect (this.page.getByText('must not be empty').nth(1)).toBeVisible();
    await expect (this.page.getByText('size must be between 11 and 21')).toBeVisible();
    await expect (this.page.getByText('size must be between 3 and 30')).toBeVisible(); 
    await expect (this.page.getByText('size must be between 3 and 18')).toBeVisible(); 
}

async returnHomePageVisible(){
    await this.returnHomeButton.click();
    await expect (this.page.getByText('Welcome to Shady Meadows B&B')).toBeVisible();
}
}