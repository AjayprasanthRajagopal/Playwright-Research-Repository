import {  Page } from "@playwright/test";
import { LetCodeLocators } from "../locators/letCodeLocators";

export class LetCodeDragAndDropPage {

  private locators: LetCodeLocators;
  readonly page: Page;

  constructor (page: Page) {
    this.page = page;
    this.locators = new LetCodeLocators();
  }


  async clickDragAndDropTab () {
    await this.page.getByText(this.locators.dragAndDropObjects.drangAndDropTab).click();
  }

  sourceLocation (): string {
    return this.locators.dragAndDropObjects.draggable;
  }
  destinationLocation (): string {
    return this.locators.dragAndDropObjects.droppable;
  }

}
