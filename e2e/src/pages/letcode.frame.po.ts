import { Page } from "@playwright/test";
import { LetCodeLocators } from "../locators/letCodeLocators";

export class LetCodeFramePage {

  private locators: LetCodeLocators;
  readonly page: Page;

  constructor (page: Page) {
    this.page = page;
    this.locators = new LetCodeLocators();
  }


  async clickFrameTab () {
    await this.page.getByText(this.locators.framePageObject.frameTab).click();
  }

  frame () {
    return this.page.frameLocator(this.locators.framePageObject.frame);
  }
  nestedFrame () {
    return this.frame().frameLocator(this.locators.framePageObject.nestedFrame);
  }
  firstName () {
    return this.frame().getByPlaceholder(this.locators.framePageObject.firstName);
  }
  lastName () {
    return this.frame().getByPlaceholder(this.locators.framePageObject.lastName);
  }

  email () {
    return this.nestedFrame().getByPlaceholder(this.locators.framePageObject.lastName);
  }



}
