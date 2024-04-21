import { Page } from "@playwright/test";
import { RahulShettyLocators } from "../../locators/rahulShettyLocators";
export class RahulShettyPage {


  private locators = new RahulShettyLocators;

  public readonly userNameTextbox = this.page.locator(this.locators.rahulShettyLogin.userName);
  public readonly passwordTextBox = this.page.locator(this.locators.rahulShettyLogin.password);
  public readonly loginButton = this.page.locator(this.locators.rahulShettyLogin.loginButton);
  public readonly orderButton = this.page.locator(this.locators.HomePage.ordersButton);
  public readonly orderIdCheckOutPage = this.page.locator(this.locators.HomePage.orderIdCheckOutPage);

  constructor (private readonly page: Page) {
  }
  rowOrderId (id: string) {
    return this.page.locator(this.locators.HomePage.rowOrderId(id));
  }
}
