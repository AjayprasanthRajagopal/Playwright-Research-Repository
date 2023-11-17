import {  Page } from "@playwright/test";
import { LetCodeLocators } from "../../locators/letCodeLocators";

export class LetCodeDragAndDropPage {

  private locators = new  LetCodeLocators();
  constructor (private readonly page: Page) {
  }

  public readonly dragAndDropTab =  this.page.getByText(this.locators.dragAndDropObjects.drangAndDropTab);
  public readonly sourceLocation =  this.locators.dragAndDropObjects.draggable;
  public readonly destinationLocation =  this.locators.dragAndDropObjects.droppable;

}
