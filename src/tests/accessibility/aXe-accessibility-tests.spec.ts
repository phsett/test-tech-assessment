import AxeBuilder from '@axe-core/playwright';
import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/home-page';
import { ReservationPage } from '../../pages/reservation-page';

test.describe('Accessibility Tests', () => {
  let homePage: HomePage;
  let reservationPage: ReservationPage;     
    test.beforeEach(async ({ page }) => {   
        homePage = new HomePage(page);
        reservationPage = new ReservationPage(page);
        await homePage.goToURL();
    });

    test('Home Page should have no accessibility violations', async ({ page }) => {
        const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa, wcag22a, wcag22aa'])
        .analyze();
        expect(accessibilityScanResults.violations).toEqual([]);
    }); 
    test('Reservation Page should have no accessibility violations', async ({ page }) => {
        // Navigate to Reservation Page
        await homePage.clickBookRoomButton();   
        const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa, wcag22a, wcag22aa'])
        .analyze();
        expect(accessibilityScanResults.violations).toEqual([]);
    }); 
}); 

