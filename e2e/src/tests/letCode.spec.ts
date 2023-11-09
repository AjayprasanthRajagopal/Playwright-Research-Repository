import test from "../fixtures/baseFixtures";
import { expect } from "@playwright/test";
import * as testData from "../testData/letCode";
test.describe("Final Dissertation", async () => {


  test.afterAll("tearDown", async ({ browser }) => {
    await browser.close();
  });

  test("LetCode.in Automation ", async ({ page, letCodeInputTextPage }) => {

    await test.step("Launch Letcode.in", async () => {
      await page.goto(testData.letCode.testUrl, { waitUntil:"load" });
      await page.waitForTimeout(5000);
      expect(page.url()).toBe(testData.letCode.testUrl);
    });

    await test.step("Verify Header", async () => {
      const header = await letCodeInputTextPage.getHeaderText();
      console.log(header);
      expect(header).toContain(testData.letCode.header);
    });




  });
});


