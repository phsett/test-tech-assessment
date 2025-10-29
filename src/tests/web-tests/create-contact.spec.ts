import { test } from '../../fixtures/fixtures';

test.describe('Create Contact Message Test Suite', () => {

    test.beforeEach(async ({ homePage }) => {
        await homePage.goToURL();
    });

    test('Create a contact message successfully @regression', async ({ page, homePage,adminMessagesPage }) => {

         await homePage.createContactMessage();

        //Log in to admin site and verify contact page message appears in admin messages list
          await adminMessagesPage.verifyMessageReceived();
    });

    test ('Show validation errors when creating a contact message with missing details @regression', async ({ homePage }) => {
        await homePage.submitContactFormWithMissingDetails();
        await homePage.contactFormValidationErrors();
    });
});
