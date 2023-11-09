import { test,expect } from '@playwright/test';
import { LetCodeRadioPage } from '../pages/letcode.radio.spec';
import * as testData from "../testData/letCode"
test.describe("", async () => {


   test.afterAll('TearDown', async ({ browser }) => {
   await browser.close();
  })

  test('Radio Button Automation', async ({ page }) => {
    const letCode = new LetCodeRadioPage(page);

    await test.step('Launch Letcode.in', async () => {
      await page.goto(testData.letCode.testUrl,{waitUntil:'load'});
      expect(page.url()).toBe(testData.letCode.testUrl)
    });

    await test.step('Radio Button', async () => {
      await letCode.clickRadioTab();
      await letCode.YesRadio().check();
      const isChecked  = await letCode.preselectedRadio().isChecked()
      expect(isChecked).toBeTruthy();
      const isDisabled = await letCode.disabledRadio().isDisabled();
      expect(isDisabled).toBeTruthy();
      const isEnabled = await letCode.preselectedCheckbox().isChecked();
      expect(isEnabled).toBeTruthy();
      await letCode.termsAndConditionCheckbox().setChecked(true);
      await letCode.preselectedCheckbox().setChecked(false);
      await page.pause();

    });
    

  

  })

})


