import { roomDetails } from '../../constants/constants';
import { test, expect } from '../../fixtures/fixtures';


test.describe('Creating a Room', () => {

test ('Log in to Admin Page and add room @regression' , async ({ page, adminCreateRoomPage }) => {
// This test logs in and creates a new room before verifying that room is added to the list
    await adminCreateRoomPage.createRoom();
    await expect (page.getByText(roomDetails.roomName)).toBeHidden();
})

test ('Log in to Admin Page and check room creation validation error @regression' , async ({ adminCreateRoomPage }) => {
// This test logs in and attempts to create a new room without entering required details to verify validation errors are shown
    await adminCreateRoomPage.createInvalidRoom();
    await adminCreateRoomPage.roomCreationErrorValidation();
})

});