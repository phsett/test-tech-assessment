import { Locator, Page, expect } from "@playwright/test";
import { adminLogin } from "../helpers/common-helpers";

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

  constructor(page: Page) {
    this.page = page;
    this.roomNameField = page.getByTestId("roomName");
    this.roomTypeDropDown = page.locator("#type");
    this.roomPriceField = page.locator("#roomPrice");
    this.wifiCheckbox = page.locator("#wifiCheckbox");
    this.tvCheckbox = page.locator("#tvCheckbox");
    this.radioCheckbox = page.locator("#radioCheckbox");
    this.refreshmentsCheckbox = page.locator("#refreshCheckbox");
    this.viewsCheckbox = page.locator("#viewsCheckbox");
    this.safeCheckbox = page.locator("#safeCheckbox");
    this.createRoomButton = page.getByRole("button", { name: "Create" });
  }

  async createRoom(roomName: string = "110", roomPrice: string = "150") {
    await adminLogin(this.page);
    await this.roomNameField.fill(roomName);
    await this.roomTypeDropDown.selectOption("Suite");
    await this.roomPriceField.fill(roomPrice);
    await this.wifiCheckbox.check();
    await this.tvCheckbox.check();
    await this.radioCheckbox.check();
    await this.refreshmentsCheckbox.check();
    await this.viewsCheckbox.check();
    await this.safeCheckbox.check();
    await this.createRoomButton.click();
  }

  async roomCreationErrorValidation() {
    await expect(this.page.getByText("Room Name must be set")).toBeVisible();
    await expect(
      this.page.getByText("must be greater than or equal to 1")
    ).toBeVisible();
  }
}
