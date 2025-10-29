import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { ReservationPage } from '../pages/reservation-page';
import { adminMessagesLogIn} from '../helpers/common-helpers';


test.describe('Create Contact Message Test Suite', () => {
    let homePage: HomePage;
    let reservationPage: ReservationPage;  

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        reservationPage = new ReservationPage(page);
        await homePage.goToURL();
    });

    test('Should create a contact message successfully', async ({ page }) => {
        // set constant which can then be later used to verify booking in admin bookings list
        const name = await homePage.createContactMessage();
        // await expect(page.getByText('Thank you for getting in touch')).toBeVisible();

        //Verify booking appears in admin bookings list
          await adminMessagesLogIn(page);
          await expect (page.getByText(name)).toBeVisible();
    });
});
