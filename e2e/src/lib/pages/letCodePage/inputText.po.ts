import { Page } from "@playwright/test";
import { LetCodeLocators } from "../../locators/letCodeLocators";

export class LetCodeInputTextPage {

  private locators = new  LetCodeLocators();
  constructor (private readonly page: Page) {
  }


  public readonly headerText  = this.page.locator(this.locators.CommonPageObject.header);
  public readonly inputTab =  this.page.getByText(this.locators.inputTextPageObject.inputTab);
  public readonly enterTextBox = this.page.locator(this.locators.inputTextPageObject.enterText);
  public readonly apendTextBox  = this.page.locator(this.locators.inputTextPageObject.apendText);
  public readonly getValueTextBox = this.page.locator(this.locators.inputTextPageObject.getText);
  public readonly clearTextBox = this.page.locator(this.locators.inputTextPageObject.clearText);
  public readonly disabledTextBox = this.page.locator(this.locators.inputTextPageObject.disabledText);
  public readonly enabledTextBox = this.page.locator(this.locators.inputTextPageObject.enabledText);

}
