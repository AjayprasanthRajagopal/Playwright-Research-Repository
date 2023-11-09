import { test, expect, Page } from '@playwright/test';
import { LetCodeInputTextPage } from '../pages/letcode.inputText.po';
import * as testData from "../testData/letCode"
test.describe("", async () => {


  test.afterAll('tearDown', async ({ browser }) => {
    await browser.close();
  })

  test('Text Box Automation', async ({ page }) => {
    const letCode = new LetCodeInputTextPage(page);

    await test.step('Launch Letcode.in', async () => {
      await page.goto(testData.letCode.testUrl, { waitUntil: 'load' });
      expect(page.url()).toBe(testData.letCode.testUrl)
    });

    await test.step('Click Input tab', async () => {
      await letCode.clickInputTab();
      //type value
      await letCode.enterTextBox().fill(testData.letCode.textBox.enterName);
      //append value
      await letCode.apendTextBox().fill(testData.letCode.textBox.apendText);
      //get value from textbox
      const getTextBoxValue = await letCode.getValueTextBox().getAttribute("value")
      expect(getTextBoxValue).toContain(testData.letCode.textBox.getText)
      //clear value
      await letCode.clearTextBox().clear();
      //disabled textbox
      const isDisabledTextbox = await letCode.disabledTextBox().isDisabled();
      expect(isDisabledTextbox).toBeTruthy();
      //enabled Textbox
      const isEnabledTextbox = await letCode.enabledTextBox().isEnabled();
      expect(isEnabledTextbox).toBeTruthy();
    });




  })
})


