import test from "../../fixtures/baseFixtures";
import { expect } from "@playwright/test";
import configSetup from "../../config/configSetup";

const suite = "uiActions" ;
const testData = configSetup(suite);
test.describe("", async () => {


  test.afterAll("TearDown", async ({ browser }) => {
    await browser.close();
  });

  test("Radio Automation", async ({ page, letCodeRadioPage }) => {

    await test.step("Launch Letcode.in", async () => {
      await page.goto(testData.testUrl, { waitUntil:"load" });
      await page.waitForTimeout(5000);
      expect(page.url()).toBe(testData.testUrl);
    });

    await test.step("Explore Radio Actions", async () => {
      await letCodeRadioPage.radioTab.click();
      await letCodeRadioPage.YesRadio.check();
      const isChecked  = await letCodeRadioPage.preselectedRadio.isChecked();
      expect(isChecked).toBeTruthy();
      const isDisabled = await letCodeRadioPage.disabledRadio.isDisabled();
      expect(isDisabled).toBeTruthy();
      const isEnabled = await letCodeRadioPage.preselectedCheckbox.isChecked();
      expect(isEnabled).toBeTruthy();
      await letCodeRadioPage.termsAndConditionCheckbox.setChecked(true);
      await letCodeRadioPage.preselectedCheckbox.setChecked(false);

    });




  });

});


