import { BrowserContext, Page, test } from "@playwright/test";
import { LetCodeAlertPage } from "../pages/letcode.alert.po";
import { LetCodeButtonPage } from "../pages/letcode.button.po";
import { LetCodeDragAndDropPage } from "../pages/letcode.dragAndDrop.spec";
import { LetCodeDropDownPage } from "../pages/letcode.dropdown.po";
import { LetCodeFramePage } from "../pages/letcode.frame.po";
import { LetCodeInputTextPage } from "../pages/letcode.inputText.po";
import { LetCodeRadioPage } from "../pages/letcode.radio.spec";
import { LetCodeWindowPage } from "../pages/letcode.window.spec";


const baseTest = test.extend<{
    browserContext: BrowserContext;
    page: Page;
    letCodeAlertPage: LetCodeAlertPage;
    letCodeButtonPage: LetCodeButtonPage;
    letCodeDragAndDropPage: LetCodeDragAndDropPage;
    letCodeDropDownPage: LetCodeDropDownPage;
    letCodeFramePage: LetCodeFramePage;
    letCodeInputTextPage: LetCodeInputTextPage;
    letCodeRadioPage: LetCodeRadioPage;
    letCodeWindowPage: LetCodeWindowPage
}>({
  browserContext: async ({ browser }, use) => {
    const context = await browser.newContext();
    await use(context);
    await context.close();
  },
  page: async ({ browserContext }, use) => {
    const page = await browserContext.newPage();
    await use(page);
  },
  letCodeAlertPage: async ({ page }, use) => {
    await use(new LetCodeAlertPage(page));
  },
  letCodeButtonPage: async ({ page }, use) => {
    await use(new LetCodeButtonPage(page));
  },
  letCodeDragAndDropPage: async ({ page }, use) => {
    await use(new LetCodeDragAndDropPage(page));
  },
  letCodeDropDownPage: async ({ page }, use) => {
    await use(new LetCodeDropDownPage(page));
  },
  letCodeFramePage: async ({ page }, use) => {
    await use(new LetCodeFramePage(page));
  },
  letCodeInputTextPage: async ({ page }, use) => {
    await use(new LetCodeInputTextPage(page));
  },
  letCodeRadioPage: async ({ page }, use) => {
    await use(new LetCodeRadioPage(page));
  },
  letCodeWindowPage: async ({ page }, use) => {
    await use(new LetCodeWindowPage(page));
  },

});

export default baseTest;
