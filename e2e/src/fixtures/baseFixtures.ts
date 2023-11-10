import { BrowserContext, Page, test } from "@playwright/test";
import { LetCodeAlertPage } from "../lib/pages/letCodePage/alert.po";
import { LetCodeButtonPage } from "../lib/pages/letCodePage/button.po";
import { LetCodeDragAndDropPage } from "../lib/pages/letCodePage/dragAndDrop.po";
import { LetCodeDropDownPage } from "../lib/pages/letCodePage/dropdown.po";
import { LetCodeFramePage } from "../lib/pages/letCodePage/frame.po";
import { LetCodeInputTextPage } from "../lib/pages/letCodePage/inputText.po";
import { LetCodeRadioPage } from "../lib/pages/letCodePage/radio.po";
import { LetCodeWindowPage } from "../lib/pages/letCodePage/window.po";
import { Form } from "../lib/pages/demoQaPage/form.po";
import { ShadowDomPage } from "../lib/pages/shadowPage/shadow.po";


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
    letCodeWindowPage: LetCodeWindowPage;
    form: Form;
    shadowDom: ShadowDomPage
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
  form: async ({ page }, use) => {
    await use(new Form(page));
  },
  shadowDom: async ({ page }, use) => {
    await use(new ShadowDomPage(page));
  },
});

export default baseTest;
