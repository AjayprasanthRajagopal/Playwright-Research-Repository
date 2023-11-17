import { Page } from "@playwright/test";
import { ShadowDomLocators } from "../../locators/shadowDomLocators";
export class ShadowDomPage {


  private locators = new ShadowDomLocators;

  public readonly buttonOutsideShadow = this.page.locator(this.locators.shadow.buttonOutsideShadowRoot);
  public readonly buttonInsideShadow = this.page.locator(this.locators.shadow.buttonInsideShadowRoot);

  constructor (private readonly page: Page) {
  }


  /*
   * private  locators = {
   * buttonOutsideShadowRoot: "//button[@id='my-btn']",
   * buttonInsideShadowRoot: "#shadow-host #my-btn"
   * };
   */

  /*
   *public readonly buttonOutsideShadow = this.page.locator(this.locators.buttonOutsideShadowRoot);
   *public readonly buttonInsideShadow = this.page.locator(this.locators.buttonInsideShadowRoot);
   */



}
