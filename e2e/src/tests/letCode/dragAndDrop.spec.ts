import test from "../../fixtures/baseFixtures";
import { expect } from "@playwright/test";
import * as testData from "../../lib/testData/letCode";

test.describe("", async () => {


  test.afterAll("TearDown", async ({ browser }) => {
    await browser.close();
  });

  test("Drag and Drop Automation", async ({ page, letCodeDragAndDropPage }) => {

    await test.step("Launch Letcode.in", async () => {
      await page.goto(testData.letCode.testUrl, { waitUntil:"load" });
      await page.waitForTimeout(5000);
      expect(page.url()).toBe(testData.letCode.testUrl);
    });

    await test.step("Explore Drag and Drop Actions", async () => {
      await letCodeDragAndDropPage.clickDragAndDropTab();
      await page.dragAndDrop(letCodeDragAndDropPage.sourceLocation(), letCodeDragAndDropPage.destinationLocation());
      await page.waitForTimeout(10000);
    });




  });

});


