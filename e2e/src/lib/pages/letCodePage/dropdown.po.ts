import { Page } from "@playwright/test";
import { LetCodeLocators } from "../../locators/letCodeLocators";

export class LetCodeDropDownPage {

  private locators = new  LetCodeLocators();

  constructor (private readonly page: Page) {
  }
  public readonly dropDownTab =  this.page.locator(this.locators.dropDownPageObject.dropDownTab);
  public readonly fruitsDropDown = this.page.locator(this.locators.dropDownPageObject.fruitsDropDown);
  public readonly superHeroesDropDown = this.page.locator(this.locators.dropDownPageObject.superHeroesDropDown);
  public readonly languageDropDown = this.page.locator(this.locators.dropDownPageObject.languageDropDown);
  public readonly countryDropDown = this.page.locator(this.locators.dropDownPageObject.countryDropDown);
  public readonly fruitNotification = this.page.locator(this.locators.dropDownPageObject.notificationMsg1);
  public readonly secondNotification = this.page.locator(this.locators.dropDownPageObject.notificationMsg2);
}
