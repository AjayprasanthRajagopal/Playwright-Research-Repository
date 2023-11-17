import test from "../../fixtures/baseFixtures";
import { expect } from "@playwright/test";
import { uiActionsData } from "../../lib/testData/index";

const testData = uiActionsData;
test.describe("", async () => {

  test.afterAll("TearDown", async ({ browser }) => {
    await browser.close();
  });


  test("Frame Automation", async ({ page, letCodeFramePage }) => {

    await test.step("Launch Letcode.in", async () => {
      await page.goto(testData.testUrl, { waitUntil:"load" });
      await page.waitForTimeout(5000);
      expect(page.url()).toBe(testData.testUrl);
    });

    await test.step("Explore Frame and Nested Frames", async () => {
      await letCodeFramePage.frameTab.click();
      //Handle single frame
      await letCodeFramePage.firstName.fill(testData.frame.firstName, { timeout:20000 });
      await letCodeFramePage.lastName.fill(testData.frame.lastName, { timeout:20000 });
      await letCodeFramePage.email.fill(testData.frame.email, { timeout:20000 });
    });


  });

});


