import { Page } from "@playwright/test";
import { LetCodeLocators } from "../../locators/letCodeLocators";

export class LetCodeAlertPage {

  private locators = new LetCodeLocators();

  constructor (private readonly page: Page) {
  }

  public readonly alertTab = this.page.locator(this.locators.alertPageObject.alertTab);
  public readonly simpleAlert  =  this.page.locator(this.locators.alertPageObject.simpleAlert);
  public readonly confirmAlert =  this.page.locator(this.locators.alertPageObject.confirmAlert);
  public readonly promptAlert =  this.page.locator(this.locators.alertPageObject.promptAlert);
  public readonly modernAlert  =  this.page.locator(this.locators.alertPageObject.modernAlert);
  public readonly modernAlertClose = this.page.locator(this.locators.alertPageObject.modernAlertClose);

}
