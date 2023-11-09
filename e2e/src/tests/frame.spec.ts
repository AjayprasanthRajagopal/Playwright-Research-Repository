import test from "../fixtures/baseFixtures";
import { expect } from "@playwright/test";
import * as testData from "../testData/letCode";
test.describe("", async () => {

  test.afterAll("TearDown", async ({ browser }) => {
    await browser.close();
  });


  test("Frame Automation", async ({ page, letCodeFramePage }) => {

    await test.step("Launch Letcode.in", async () => {
      await page.goto(testData.letCode.testUrl, { waitUntil:"load" });
      await page.waitForTimeout(5000);
      expect(page.url()).toBe(testData.letCode.testUrl);
    });

    await test.step("Click Button tab", async () => {
      await letCodeFramePage.clickFrameTab();
      //Handle single frame
      await letCodeFramePage.firstName().fill(testData.letCode.frame.firstName, { timeout:2000 });
      await letCodeFramePage.lastName().fill(testData.letCode.frame.lastName, { timeout:2000 });
      await letCodeFramePage.email().fill(testData.letCode.frame.email, { timeout:2000 });
    });


  });

});


