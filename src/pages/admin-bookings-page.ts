import { Locator, Page, expect } from "@playwright/test";
import { userDetails } from "../constants/constants";
import { adminLogin } from "../helpers/common-helpers";

export class AdminBookingPage {
    readonly page: Page;
    readonly BookingsTab: Locator;
    readonly nextButton: Locator;

constructor(page: Page) {
    this.page = page;
    this.BookingsTab = page.getByRole('link', { name: 'Bookings' });
    this.nextButton = page.getByRole('button', { name: 'Next' });
    }           

//Verify booking appears in admin bookings list using name of user from constants file
async verifyBookingCreated() {
    await adminLogin(this.page);
   await this.BookingsTab.click(); 
   await this.nextButton.click(); 
   await expect (this.page.getByText(userDetails.firstName)).toBeVisible();
   } 
}    