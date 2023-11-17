import test from "../../fixtures/baseFixtures";
import { expect } from "@playwright/test";
import configSetup from "../../config/configSetup";

const suite = "uiActions" ;
const testData = configSetup(suite);
test.describe("", async () => {


  test.afterAll("TearDown", async ({ browser }) => {
    await browser.close();
  });

  test("Window Handling Automation", async ({ page, letCodeWindowPage }) => {

    await test.step("Launch Letcode.in", async () => {
      await page.goto(testData.testUrl, { waitUntil:"load" });
      await page.waitForTimeout(5000);
      expect(page.url()).toBe(testData.testUrl);
    });

    await test.step("Explore Handling Windows", async () => {
      await letCodeWindowPage.windowTab.click();

      const [newWindow] = await Promise.all([
        page.waitForEvent("popup"),
        await letCodeWindowPage.homeTab.click(),
      ]);

      console.log("New Window URL-->" + await newWindow.url());
      await newWindow.getByText("Inner HTML").click();
      console.log("Navigated from new Window to Frame  -->" + newWindow.url());

    });

  });

});


