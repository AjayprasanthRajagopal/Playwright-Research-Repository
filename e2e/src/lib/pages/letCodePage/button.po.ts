import { Page } from "@playwright/test";
import { LetCodeLocators } from "../../locators/letCodeLocators";

export class LetCodeButtonPage {

  private locators = new  LetCodeLocators;

  constructor (private readonly page: Page) {
  }


  public readonly workSpaceButton  = this.page.locator(this.locators.CommonPageObject.workSpace);
  public readonly buttonTab  = this.page.getByText(this.locators.buttonPageObject.buttonTab);
  public readonly homeButton  = this.page.locator(this.locators.buttonPageObject.goToHomeButton);
  public readonly  locationButton = this.page.locator(this.locators.buttonPageObject.locationButton);
  public readonly colorButton  = this.page.locator(this.locators.buttonPageObject.colorButton);
  public readonly  positionButton = this.page.locator(this.locators.buttonPageObject.positionButton);
  public readonly disabledButton  = this.page.locator(this.locators.buttonPageObject.disabledButton);
  public readonly clickAndHoldButton  = this.page.locator(this.locators.buttonPageObject.holdButton);

}
