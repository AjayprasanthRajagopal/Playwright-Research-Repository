import { Page } from "@playwright/test";
import { FormLocators } from "../../locators/formLocators";
export class Form {

  private locators: FormLocators;
  readonly page: Page;

  constructor (page: Page) {
    this.page = page;
    this.locators = new FormLocators();
  }

  header () {
    return this.page.locator(this.locators.form.header);
  }
  firstNameTextbox () {
    return this.page.getByPlaceholder(this.locators.form.firstNameTextbox);
  }

  lastNameTextbox () {
    return this.page.getByPlaceholder(this.locators.form.lastNameTextbox);
  }

  enterEmailTextbox () {
    return this.page.locator(this.locators.form.emailTextbox);
  }

  mobileNoTextbox () {
    return this.page.getByPlaceholder(this.locators.form.mobileNoTextbox);
  }

  genderRadio (gender: string) {
    return this.page.locator(this.locators.form.genderRadio(gender));
  }

  dobTextbox () {
    return this.page.locator(this.locators.form.DOBTextbox);
  }
  async selectSubject (subject: string) {
    await this.page.locator(this.locators.form.subjectTextbox).click();
    await this.page.locator("#subjectsInput").fill(subject);
  }
  hobbiesCheckbox (hobby: string) {
    return this.page.locator(this.locators.form.hobbiesCheckbox(hobby));
  }
  uploadPictureButton () {
    return this.locators.form.uploadFile;
  }
  currentAddressTextbox () {
    return this.page.getByPlaceholder(this.locators.form.currentAddress);
  }
  stateDropdown () {
    return this.page.locator(this.locators.form.stateDropdown);
  }
  cityDropdown () {
    return this.page.locator(this.locators.form.cityDropdown);
  }
  submitButton () {
    return this.page.locator(this.locators.form.submitButton);
  }
  closeButton () {
    return this.page.locator(this.locators.form.closeButton);
  }

}
