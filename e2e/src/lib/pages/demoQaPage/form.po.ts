import { Locator, Page } from "@playwright/test";
import { FormLocators } from "../../locators/formLocators";
export class Form {

  private locators = new FormLocators();
  constructor (private readonly page: Page) {}


  public readonly header = this.page.locator(this.locators.form.header);
  public readonly firstNameTextbox  = this.page.getByPlaceholder(this.locators.form.firstNameTextbox);
  public readonly lastNameTextbox = this.page.getByPlaceholder(this.locators.form.lastNameTextbox);
  public readonly enterEmailTextbox = this.page.locator(this.locators.form.emailTextbox);
  public readonly mobileNoTextbox = this.page.getByPlaceholder(this.locators.form.mobileNoTextbox);
  public readonly genderRadio: (gender: string) => Locator = (gender: string) => this.page.locator(this.locators.form.genderRadio(gender));
  public readonly dobTextbox = this.page.locator(this.locators.form.DOBTextbox);
  public readonly subjectTextbox =  this.page.locator(this.locators.form.subjectTextbox);
  public readonly subjectEnterTextbox =  this.page.locator(this.locators.form.subjectTextboxEnter);
  public readonly hobbiesCheckbox: (hobby: string) => Locator = (hobby: string)  => this.page.locator(this.locators.form.hobbiesCheckbox(hobby));
  public readonly uploadPictureButton = this.locators.form.uploadFile;
  public readonly currentAddressTextbox = this.page.getByPlaceholder(this.locators.form.currentAddress);
  public readonly stateDropdown = this.page.locator(this.locators.form.stateDropdown);
  public readonly cityDropdown = this.page.locator(this.locators.form.cityDropdown);
  public readonly submitButton = this.page.locator(this.locators.form.submitButton);
  public readonly  closeButton = this.page.locator(this.locators.form.closeButton);


}
