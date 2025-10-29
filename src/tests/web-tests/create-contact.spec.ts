import { test } from "../../fixtures/fixtures";

test.describe("Create Contact Message Test Suite", () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.goToURL();
  });

  test('Create a contact message successfully - happy path @regression', async ({
    page,
    homePage,
    adminMessagesPage,
  }) => {
    await homePage.createContactMessage();

    //Log in to admin site and verify contact page message appears in admin messages list and content is correct
    await adminMessagesPage.verifyMessageReceived();
    await adminMessagesPage.checkMessageContent();
  });

  test('Empty contact form validation errors @regression', async ({
    homePage,
  }) => {
    await homePage.submitContactFormWithMissingDetails();
    await homePage.contactFormValidationErrors();
  });

  test('Email malformed validation error message @regression', async ({
    homePage,
  }) => {
    await homePage.emailErrorMessage();
    await homePage.emailValidationError();
  });
});
