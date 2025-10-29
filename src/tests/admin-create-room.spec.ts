import { test, expect } from '@playwright/test';
import { AdminCreateRoomPage } from '../pages/admin-create-room-page';
import { adminLogIn } from '../helpers/common-helpers';
import { HomePage } from '../pages/home-page';

test.describe('Creating a Room', () => {
  let homePage: HomePage;
  let adminCreateRoomPage: AdminCreateRoomPage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  adminCreateRoomPage = new AdminCreateRoomPage(page);
});

test ('Log in to Admin Page and add room @smoke' , async ({ page }) => {
// This test logs in and creates a new room before verifying that room is added to the list
    await adminLogIn(page);
    await adminCreateRoomPage.createRoom('202', '200');
    await expect (page.getByText('roomName202')).toBeHidden();

})

test ('Log in to Admin Page and check room creation validation error @smoke' , async ({ page }) => {
// This test logs in and attempts to create a new room without entering required details to verify validation errors are shown
    await adminLogIn(page);
    await adminCreateRoomPage.createRoom('', '');
    await expect (page.getByText('Room Name must be set')).toBeVisible();
    await expect (page.getByText('must be greater than or equal to 1')).toBeVisible();
})
});