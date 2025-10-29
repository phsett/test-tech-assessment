import { test, expect } from '../../fixtures/fixtures';
import { adminReportLogIn} from '../../helpers/common-helpers';
import { userDetails } from '../../constants/constants';

test.describe('Booking a Room', () => {

test.beforeEach(async ({ homePage }) => {
  await homePage.goToURL();
});

test ('Booking a room - Happy path @regression' , async ({ page, homePage, reservationPage, adminBookingPage }) => {

  // Check Availability and navigate to reserve room screen
  await homePage.enterCheckInDate();
  await homePage.enterCheckOutDate();
  await homePage.checkAvailabilityButton.click();
  await homePage.clickBookRoomButton();
  await expect (page.getByText('Reserve Now')).toBeVisible();

  // Reserve a room and return to home page
  await reservationPage.reserveNowButton.click();
  await reservationPage.enterUserDetails();
  await reservationPage.reserveNowButton.click();
  await reservationPage.bookingSuccessful();
  await reservationPage.returnHomePageVisible();
  

  //Verify booking appears in admin bookings list using name of user from constants file
  await adminReportLogIn(page);
  await adminBookingPage.verifyBookingCreated();

});

test ('Booking a room - Unhappy path - missing user details @regression' , async ({ homePage,reservationPage }) => {
  // Check Availability and navigate to reserve room screen
  await homePage.enterCheckInDate();
  await homePage.enterCheckOutDate();
  await homePage.checkAvailabilityButton.click();
  await homePage.clickBookRoomButton();
  await reservationPage.reserveNowButton.click();

  // Attempt to reserve a room without entering user details
  await reservationPage.reserveNowButton.click();
  await reservationPage.reservationValidationErrors();
}); 
});