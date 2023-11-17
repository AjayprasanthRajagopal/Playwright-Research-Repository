import { Page } from "@playwright/test";
import { LetCodeLocators } from "../../locators/letCodeLocators";

export class LetCodeWindowPage {

  private locators = new  LetCodeLocators();
  constructor (private readonly page: Page) {}

  public readonly windowTab =  this.page.locator(this.locators.windowPageObjects.windowTab);
  public readonly homeTab = this.page.locator(this.locators.windowPageObjects.homeTab);

}
