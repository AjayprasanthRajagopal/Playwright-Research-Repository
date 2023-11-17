import test from "../../fixtures/baseFixtures";
import { expect } from "@playwright/test";
import { uiActionsData } from "../../lib/testData/index";

const testData = uiActionsData;
test.describe("", async () => {


  test.afterAll("tearDown", async ({ browser }) => {
    await browser.close();
  });

  test("Text Box Automation", async ({ page, letCodeInputTextPage }) => {

    await test.step("Launch Letcode.in", async () => {
      await page.goto(testData.testUrl, { waitUntil: "load" });
      await page.waitForTimeout(5000);
      expect(page.url()).toBe(testData.testUrl);
    });

    await test.step("Explore Input Actions", async () => {
      await letCodeInputTextPage.inputTab.click();
      //type value
      await letCodeInputTextPage.enterTextBox.fill(testData.textBox.enterName);
      //append value
      await letCodeInputTextPage.apendTextBox.fill(testData.textBox.apendText);
      //get value from textbox
      const getTextBoxValue = await letCodeInputTextPage.getValueTextBox.getAttribute("value");
      expect(getTextBoxValue).toContain(testData.textBox.getText);
      //clear value
      await letCodeInputTextPage.clearTextBox.clear();
      //disabled textbox
      const isDisabledTextbox = await letCodeInputTextPage.disabledTextBox.isDisabled();
      expect(isDisabledTextbox).toBeTruthy();
      //enabled Textbox
      const isEnabledTextbox = await letCodeInputTextPage.enabledTextBox.isEnabled();
      expect(isEnabledTextbox).toBeTruthy();
    });




  });
});


