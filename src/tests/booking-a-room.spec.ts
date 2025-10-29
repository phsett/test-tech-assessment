import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { ReservationPage } from '../pages/reservation-page';
import { adminReportLogIn} from '../helpers/common-helpers';

test.describe('Booking a Room Tests', () => {
  let homePage: HomePage;
  let reservationPage: ReservationPage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  reservationPage = new ReservationPage(page);
  await homePage.goToURL();
});

test ('Booking a room - Happy path @regression' , async ({ page }) => {

  // Check Availability and navigate to reserve room screen
  await homePage.enterCheckInDate();
  await homePage.enterCheckOutDate();
  await homePage.checkAvailabilityButton.click();
  await homePage.clickBookRoomButton();
  await expect (page.getByText('Reserve Now')).toBeVisible();

  // Reserve a room and return to home page
  await reservationPage.reserveNowButton.click();
  const firstName = await reservationPage.enterUserDetails();
  await reservationPage.reserveNowButton.click();
  await expect (page.getByText('Booking Confirmed')).toBeVisible();
  await reservationPage.returnHomeButton.click();
  await expect (page.getByText('Welcome to Shady Meadows B&B')).toBeVisible();

  //Verify booking appears in admin bookings list
  await adminReportLogIn(page);
  await page.getByRole('button', { name: 'Next' }).click();
  await expect (page.getByText(firstName)).toBeVisible();

});

test ('Booking a room - Unhappy path - missing user details @regression' , async ({ page }) => {
  // Check Availability and navigate to reserve room screen
  await homePage.enterCheckInDate();
  await homePage.enterCheckOutDate();
  await homePage.checkAvailabilityButton.click();
  await homePage.clickBookRoomButton();
  await expect (page.getByText('Reserve Now')).toBeVisible();
  await reservationPage.reserveNowButton.click();

  // Attempt to reserve a room without entering user details
  await reservationPage.reserveNowButton.click();
  await expect (page.getByText('Lastname should not be blank')).toBeVisible();
  await expect (page.getByText('Firstname should not be blank')).toBeVisible();
  await expect (page.getByText('must not be empty').nth(1)).toBeVisible();
  await expect (page.getByText('size must be between 11 and 21')).toBeVisible();
  await expect (page.getByText('size must be between 3 and 30')).toBeVisible(); 
  await expect (page.getByText('size must be between 3 and 18')).toBeVisible(); 
});
});