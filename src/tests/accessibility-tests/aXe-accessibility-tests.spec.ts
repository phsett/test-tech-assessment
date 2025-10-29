import { test } from '../../fixtures/fixtures';
import { expectNoAccessibilityViolations } from '../../helpers/axe-accessibility-helper';

test.describe('Accessibility Tests', () => {

    test('Home Page should have no accessibility violations', async ({ homePage }) => {
        await homePage.goToURL();
        await expectNoAccessibilityViolations(homePage);
    });

    test('Reservation Page should have no accessibility violations', async ({ homePage, reservationPage }) => {
        await homePage.goToURL();
        await homePage.clickBookRoomButton();
        await expectNoAccessibilityViolations(reservationPage);
    });
});

