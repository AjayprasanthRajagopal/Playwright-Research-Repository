import { Page } from "@playwright/test";
import { LetCodeLocators } from "../locators/letCodeLocators";

export class LetCodeAlertPage {

  private locators: LetCodeLocators;
  readonly page: Page;

  constructor (page: Page) {
    this.page = page;
    this.locators = new LetCodeLocators();
  }


  async clickAlertTab () {
    await this.page.locator(this.locators.alertPageObject.alertTab).click();
  }

  simpleAlert () {
    return this.page.locator(this.locators.alertPageObject.simpleAlert);
  }
  confirmAlert () {
    return this.page.locator(this.locators.alertPageObject.confirmAlert);
  }
  promptAlert () {
    return this.page.locator(this.locators.alertPageObject.promptAlert);
  }
  modernAlert () {
    return this.page.locator(this.locators.alertPageObject.modernAlert);
  }

  async closeModernAlert () {
    await this.page.locator(this.locators.alertPageObject.modernAlertClose).click();
  }



}
