import { Page } from "@playwright/test";
import { LetCodeLocators } from "../../locators/letCodeLocators";

export class LetCodeDropDownPage {

  private locators: LetCodeLocators;
  readonly page: Page;

  constructor (page: Page) {
    this.page = page;
    this.locators = new LetCodeLocators();
  }


  async clickDropDownTab () {
    await this.page.locator(this.locators.dropDownPageObject.dropDownTab).click();
  }

  fruitsDropDown () {
    return this.page.locator(this.locators.dropDownPageObject.fruitsDropDown);
  }
  superHeroesDropDown () {
    return this.page.locator(this.locators.dropDownPageObject.superHeroesDropDown);
  }
  languageDropDown () {
    return this.page.locator(this.locators.dropDownPageObject.languageDropDown);
  }
  countryDropDown () {
    return this.page.locator(this.locators.dropDownPageObject.countryDropDown);
  }
  fruitNotification () {
    return this.page.locator(this.locators.dropDownPageObject.notificationMsg1);
  }
  secondNotification () {
    return this.page.locator(this.locators.dropDownPageObject.notificationMsg2);
  }


}
