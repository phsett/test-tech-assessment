import { Locator, Page, expect } from "@playwright/test";
import { userDetails } from "../constants/constants";

export class AdminBookingPage {
    readonly page: Page;
    readonly nextButton: Locator;

constructor(page: Page) {
    this.page = page;
    this.nextButton = page.getByRole('button', { name: 'Next' });
    }           

//Verify booking appears in admin bookings list using name of user from constants file
async verifyBookingCreated() {
   await this.nextButton.click(); 
   await expect (this.page.getByText(userDetails.firstName)).toBeVisible();
   } 
}    