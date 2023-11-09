import { test, expect } from "@playwright/test";
import * as testData from "../testData/letCode";
import { LetCodeInputTextPage } from "../pages/letcode.inputText.po";
test.describe("Final Dissertation", async () => {


  test.afterAll("tearDown", async ({ browser }) => {
    await browser.close();
  });

  test("LetCode.in Automation ", async ({ page }) => {
    const letCode = new LetCodeInputTextPage(page);

    await test.step("Launch Letcode.in", async () => {
      await page.goto(testData.letCode.testUrl, { waitUntil:"load" });
      await page.waitForTimeout(5000);
      expect(page.url()).toBe(testData.letCode.testUrl);
    });

    await test.step("Verify Header", async () => {
      const header = await letCode.getHeaderText();
      console.log(header);
      expect(header).toContain(testData.letCode.header);
    });




  });
});


