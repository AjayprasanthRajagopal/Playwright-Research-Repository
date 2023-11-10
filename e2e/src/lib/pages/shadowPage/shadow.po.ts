import { Page } from "@playwright/test";
import { ShadowDomLocators } from "../../locators/shadowDomLocators";

export class ShadowDomPage {

  private locators: ShadowDomLocators;
  readonly page: Page;

  constructor (page: Page) {
    this.page = page;
    this.locators = new ShadowDomLocators();
  }


  buttonOutsideShadowDom () {
    return this.page.locator(this.locators.shadow.buttonOutsideShadowRoot);
  }

  buttonInsideShadowDom () {
    return this.page.locator(this.locators.shadow.buttonInsideShadowRoot);
  }

}
