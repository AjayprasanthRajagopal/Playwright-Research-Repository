import test from "../../fixtures/baseFixtures";
import { expect } from "@playwright/test";
import { uiActionsData } from "../../lib/testData/index";

const testData = uiActionsData;
test.describe("", async () => {


  test.afterAll("TearDown", async ({ browser }) => {
    await browser.close();
  });

  test("Drag and Drop Automation", async ({ page, letCodeDragAndDropPage }) => {

    await test.step("Launch Letcode.in", async () => {
      await page.goto(testData.testUrl, { waitUntil:"load" });
      await page.waitForTimeout(5000);
      expect(page.url()).toBe(testData.testUrl);
    });

    await test.step("Explore Drag and Drop Actions", async () => {
      await letCodeDragAndDropPage.dragAndDropTab.click();
      await page.dragAndDrop(letCodeDragAndDropPage.sourceLocation, letCodeDragAndDropPage.destinationLocation);
      await page.waitForTimeout(10000);
    });

  });

});


