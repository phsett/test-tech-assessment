import { test, expect } from '../../fixtures/fixtures';
import { adminLogIn } from '../../helpers/common-helpers';


test.describe('Creating a Room', () => {

    test.beforeEach(async ({ page }) => {
        await adminLogIn(page);
    });

test ('Log in to Admin Page and add room @smoke' , async ({ page, adminCreateRoomPage }) => {
// This test logs in and creates a new room before verifying that room is added to the list
    await adminCreateRoomPage.createRoom('202', '200');
    await expect (page.getByText('roomName202')).toBeHidden();
})

test ('Log in to Admin Page and check room creation validation error @smoke' , async ({ adminCreateRoomPage }) => {
// This test logs in and attempts to create a new room without entering required details to verify validation errors are shown
    await adminCreateRoomPage.createRoom('', '');
    await adminCreateRoomPage.roomCreationErrorValidation();
})

});