import test from "../../fixtures/baseFixtures";
import { expect } from "@playwright/test";
import * as testData from "../../lib/testData/letCode";

test.describe("", async () => {


  test.afterAll("TearDown", async ({ browser }) => {
    await browser.close();
  });

  test("Window Handling Automation", async ({ page, letCodeWindowPage }) => {

    await test.step("Launch Letcode.in", async () => {
      await page.goto(testData.letCode.testUrl, { waitUntil:"load" });
      await page.waitForTimeout(5000);
      expect(page.url()).toBe(testData.letCode.testUrl);
    });

    await test.step("Explore Handling Windows", async () => {
      await letCodeWindowPage.clickWindowTab();

      const [newWindow] = await Promise.all([
        page.waitForEvent("popup"),
        await letCodeWindowPage.homeTab().click(),
      ]);

      console.log("New Window URL-->" + await newWindow.url());
      await newWindow.getByText("Inner HTML").click();
      console.log("Navigated from new Window to Frame  -->" + newWindow.url());

    });




  });

});


