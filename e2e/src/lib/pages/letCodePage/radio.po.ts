import { Page } from "@playwright/test";
import { LetCodeLocators } from "../../locators/letCodeLocators";

export class LetCodeRadioPage {

  private locators = new  LetCodeLocators();

  constructor (private readonly page: Page) {
  }

  public readonly  radioTab = this.page.locator(this.locators.radioButtonPageObject.radioButtonTab);
  public readonly YesRadio  = this.page.locator(this.locators.radioButtonPageObject.radioYes);
  public readonly preselectedRadio = this.page.locator(this.locators.radioButtonPageObject.preSelectedRadio);
  public readonly disabledRadio  = this.page.locator(this.locators.radioButtonPageObject.disabledRadio);
  public readonly preselectedCheckbox = this.page.locator(this.locators.radioButtonPageObject.rememberMeCheckbox);
  public readonly termsAndConditionCheckbox = this.page.locator(this.locators.radioButtonPageObject.termsAndConditionsCheckbox);

}
