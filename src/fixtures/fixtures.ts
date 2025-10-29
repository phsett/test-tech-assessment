import { test as base } from "@playwright/test";
import { HomePage } from "../pages/home-page";
import { ReservationPage } from "../pages/reservation-page";
import { AdminLoginPage } from "../pages/admin-login-page";
import { AdminCreateRoomPage } from "../pages/admin-create-room-page";
import { AdminBookingPage } from "../pages/admin-bookings-page";

type MyFixtures = {
    homePage: HomePage;
    reservationPage: ReservationPage;
    adminLoginPage: AdminLoginPage;
    adminCreateRoomPage: AdminCreateRoomPage;
    adminBookingPage: AdminBookingPage;
};

 // Extend 'test' with our custom fixtures to avoid repetitive code in tests

export const test = base.extend<MyFixtures>({
     homePage: async ({ page }, use) => {
        await use (new HomePage(page))
    }, 
    reservationPage: async ({ page }, use) => {
        await use (new ReservationPage(page))
    },
    adminLoginPage: async ({ page }, use) => {
        await use (new AdminLoginPage(page))
    },
    adminCreateRoomPage: async ({ page }, use) => {
        await use (new AdminCreateRoomPage(page))
    },  
    adminBookingPage: async ({ page }, use) => {
        await use (new AdminBookingPage(page))
    },
})

export { expect } from "@playwright/test";