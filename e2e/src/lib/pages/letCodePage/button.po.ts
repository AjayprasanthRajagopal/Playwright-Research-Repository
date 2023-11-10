import { Page } from "@playwright/test";
import { LetCodeLocators } from "../../locators/letCodeLocators";

export class LetCodeButtonPage {

  private locators: LetCodeLocators;
  readonly page: Page;

  constructor (page: Page) {
    this.page = page;
    this.locators = new LetCodeLocators();
  }

  workSpaceButton () {
    return this.page.locator(this.locators.CommonPageObject.workSpace);
  }
  async clickButtonTab () {
    await this.page.getByText(this.locators.buttonPageObject.buttonTab).click();
  }

  homeButton () {
    return this.page.locator(this.locators.buttonPageObject.goToHomeButton);
  }

  locationButton () {
    return this.page.locator(this.locators.buttonPageObject.locationButton);
  }
  colorButton () {
    return this.page.locator(this.locators.buttonPageObject.colorButton);
  }
  positionButton () {
    return this.page.locator(this.locators.buttonPageObject.positionButton);
  }
  disabledButton () {
    return this.page.locator(this.locators.buttonPageObject.disabledButton);
  }
  clickAndHoldButton () {
    return this.page.locator(this.locators.buttonPageObject.holdButton);
  }

}
