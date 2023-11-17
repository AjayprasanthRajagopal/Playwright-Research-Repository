import { Page } from "@playwright/test";
import { LetCodeLocators } from "../../locators/letCodeLocators";

export class LetCodeFramePage {

  private locators = new  LetCodeLocators();
  constructor (private readonly page: Page) {
  }

  public readonly frameTab =  this.page.getByText(this.locators.framePageObject.frameTab);
  public readonly frame  =  this.page.frameLocator(this.locators.framePageObject.frame);
  public readonly nestedFrame =  this.frame.frameLocator(this.locators.framePageObject.nestedFrame);
  public readonly firstName =  this.frame.getByPlaceholder(this.locators.framePageObject.firstName);
  public readonly  lastName =  this.frame.getByPlaceholder(this.locators.framePageObject.lastName);
  public readonly email =  this.nestedFrame.getByPlaceholder(this.locators.framePageObject.lastName);

}
