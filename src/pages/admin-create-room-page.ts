import { Locator, Page } from "@playwright/test";

export class AdminCreateRoomPage {
    readonly page: Page;
    readonly roomNameField: Locator;
    readonly roomTypeDropDown: Locator; 
    readonly roomPriceField: Locator;
    readonly wifiCheckbox: Locator;
    readonly tvCheckbox: Locator;
    readonly radioCheckbox: Locator;
    readonly refreshmentsCheckbox: Locator;
    readonly viewsCheckbox: Locator;
    readonly safeCheckbox: Locator;
    readonly createRoomButton: Locator;
    readonly removeRoomButton: Locator;

     
 constructor(page: Page) {
    this.page = page;
    this.roomNameField = page.getByTestId('roomName');
    this.roomTypeDropDown = page.locator('#type');
    this.roomPriceField = page.locator('#roomPrice');
    this.wifiCheckbox = page.locator('#wifiCheckbox');
    this.tvCheckbox = page.locator('#tvCheckbox');
    this.radioCheckbox = page.locator('#radioCheckbox');
    this.refreshmentsCheckbox = page.locator('#refreshCheckbox');
    this.viewsCheckbox = page.locator('#viewsCheckbox');
    this.safeCheckbox = page.locator('#safeCheckbox');
    this.createRoomButton = page.getByRole('button', { name: 'Create' });
    this.removeRoomButton = page.getByTitle('fa fa-remove roomDelete');

    }      

async createRoom(roomName: string = '110', roomPrice: string = '150') {
    await this.roomNameField.click();
    await this.roomNameField.fill(roomName);
    await this.roomTypeDropDown.selectOption('Double');
    await this.roomPriceField.click();
    await this.roomPriceField.fill(roomPrice);
    await this.wifiCheckbox.check();
    await this.tvCheckbox.check();
    await this.radioCheckbox.check();
    await this.refreshmentsCheckbox.check();
    await this.viewsCheckbox.check();
    await this.safeCheckbox.check();
    await this.createRoomButton.click();

    }
}