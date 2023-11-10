import { Page } from "@playwright/test";
import { LetCodeLocators } from "../../locators/letCodeLocators";

export class LetCodeInputTextPage {

  private locators: LetCodeLocators;
  readonly page: Page;

  constructor (page: Page) {
    this.page = page;
    this.locators = new LetCodeLocators();
  }

  getHeaderText () {
    return this.page.locator(this.locators.CommonPageObject.header).textContent();
  }

  async clickInputTab () {
    await this.page.getByText(this.locators.inputTextPageObject.inputTab).click();
  }

  enterTextBox () {
    return this.page.locator(this.locators.inputTextPageObject.enterText);
  }
  apendTextBox () {
    return this.page.locator(this.locators.inputTextPageObject.apendText);
  }
  getValueTextBox () {
    return this.page.locator(this.locators.inputTextPageObject.getText);
  }
  clearTextBox () {
    return this.page.locator(this.locators.inputTextPageObject.clearText);
  }
  disabledTextBox () {
    return this.page.locator(this.locators.inputTextPageObject.disabledText);
  }
  enabledTextBox () {
    return this.page.locator(this.locators.inputTextPageObject.enabledText);
  }

}
