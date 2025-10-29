import { Locator, Page } from "@playwright/test";
import { RandomUserDetails } from "../helpers/common-helpers";

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
    this.checkAvailabilityButton = page.getByRole('button', { name: 'Check Availability' });
    this.checkInDateField = page.locator ('#booking .col-md-6').getByRole('textbox').nth(0);
    this.checkInDateSelector = page.locator('.react-datepicker__day--023');
    this.checkOutDateSelector = page.locator('.react-datepicker__day--025');
    this.nextMonthButton = page.getByRole('button', { name: 'Next Month' });
    this.previousMonthButton = page.getByRole('button', { name: 'Previous Month' });
    this.checkOutDateField = page.getByRole('textbox').nth(1);
    this.bookRoomButton = page.locator('#rooms .col-md-6.col-lg-4').getByRole('link', {name :'Book Now'});
    this.nameField = page.getByTestId ('ContactName');
    this.emailField = page.getByTestId ('ContactEmail');
    this.phoneField = page.getByTestId ('ContactPhone');
    this.SubjectField = page.getByTestId ('ContactSubject');
    this.messageField = page.getByTestId('ContactDescription');
    this.submitButton = page.getByRole('button', { name: 'Submit' });
    }

    //Methods
    async goToURL() {
        await this.page.goto('https://automationintesting.online/');
    }

    async enterCheckInDate(){
        await this.checkInDateField.click();
        await this.nextMonthButton.click();
        await this.checkInDateSelector.click();
    }   
    async enterCheckOutDate(){
        await this.checkOutDateField.click();
        await this.nextMonthButton.click();
        await this.checkOutDateSelector.click();
    }   

    async clickBookRoomButton(){
        await this.bookRoomButton.first().click()
    }

    async createContactMessage(){

        const userDetails = RandomUserDetails();
        const name = userDetails.firstName + " " +  userDetails.lastName;   

        await this.nameField.click();
        await this.nameField.fill(name);
        await this.emailField.click();
        await this.emailField.fill (userDetails.email);
        await this.phoneField.click();
        await this.phoneField.fill(userDetails.phoneNumber);
        await this.SubjectField.click();
        await this.SubjectField.fill('Test Subject');
        await this.messageField.click();
        await this.messageField.fill('This is a test message.');
        await this.submitButton.click();

        return name;
}
}
