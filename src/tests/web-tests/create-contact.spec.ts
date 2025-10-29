import { fullName, userDetails } from '../../constants/constants';
import { test, expect } from '../../fixtures/fixtures';
import { adminMessagesLogIn} from '../../helpers/common-helpers';


test.describe('Create Contact Message Test Suite', () => {

    test.beforeEach(async ({ homePage }) => {
        await homePage.goToURL();
    });

    test('Should create a contact message successfully', async ({ page, homePage }) => {

         await homePage.createContactMessage();

        //Verify contact message appears in admin messages list
          await adminMessagesLogIn(page);
          await expect (page.getByText(fullName)).toBeVisible();
    });

    test ('Should show validation errors when creating a contact message with missing details', async ({ homePage }) => {
        await homePage.submitContactFormWithMissingDetails();
        await homePage.contactFormValidationErrors();
    });
});
