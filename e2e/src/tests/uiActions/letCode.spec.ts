import test from "../../fixtures/baseFixtures";
import { expect } from "@playwright/test";
import configSetup from "../../config/configSetup";

const suite = "uiActions" ;
const testData = configSetup(suite);
test.describe("Final Dissertation", async () => {


  test.afterAll("tearDown", async ({ browser }) => {
    await browser.close();
  });

  test("LetCode.in Automation ", async ({ page, letCodeInputTextPage }) => {

    await test.step("Launch Letcode.in", async () => {
      await page.goto(testData.testUrl, { waitUntil:"load" });
      await page.waitForTimeout(5000);
      expect(page.url()).toBe(testData.testUrl);
    });

    await test.step("Verify Header", async () => {
      const header = await letCodeInputTextPage.headerText.textContent();
      console.log(header);
      expect(header).toContain(testData.header);
    });




  });
});


