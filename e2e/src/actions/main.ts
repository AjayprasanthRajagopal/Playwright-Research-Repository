import { Page } from "@playwright/test";
import { LetCodePage } from "../pages/letcode.po";
export class Main {

  readonly page: Page;
  readonly demoQa: LetCodePage;

  constructor (page: Page) {
    this.page = page;
    this.demoQa = new LetCodePage(page);
  }


}
