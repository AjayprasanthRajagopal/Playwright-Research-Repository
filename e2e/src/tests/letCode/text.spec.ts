import test from "../../fixtures/baseFixtures";
import { expect } from "@playwright/test";
import * as testData from "../../lib/testData/letCode";

test.describe("", async () => {


  test.afterAll("tearDown", async ({ browser }) => {
    await browser.close();
  });

  test("Text Box Automation", async ({ page, letCodeInputTextPage }) => {

    await test.step("Launch Letcode.in", async () => {
      await page.goto(testData.letCode.testUrl, { waitUntil: "load" });
      await page.waitForTimeout(5000);
      expect(page.url()).toBe(testData.letCode.testUrl);
    });

    await test.step("Explore Input Actions", async () => {
      await letCodeInputTextPage.clickInputTab();
      //type value
      await letCodeInputTextPage.enterTextBox().fill(testData.letCode.textBox.enterName);
      //append value
      await letCodeInputTextPage.apendTextBox().fill(testData.letCode.textBox.apendText);
      //get value from textbox
      const getTextBoxValue = await letCodeInputTextPage.getValueTextBox().getAttribute("value");
      expect(getTextBoxValue).toContain(testData.letCode.textBox.getText);
      //clear value
      await letCodeInputTextPage.clearTextBox().clear();
      //disabled textbox
      const isDisabledTextbox = await letCodeInputTextPage.disabledTextBox().isDisabled();
      expect(isDisabledTextbox).toBeTruthy();
      //enabled Textbox
      const isEnabledTextbox = await letCodeInputTextPage.enabledTextBox().isEnabled();
      expect(isEnabledTextbox).toBeTruthy();
    });




  });
});


