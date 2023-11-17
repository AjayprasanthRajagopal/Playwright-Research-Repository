import test from "../../fixtures/baseFixtures";
import { expect } from "@playwright/test";
import { uiActionsData } from "../../lib/testData/index";

const testData = uiActionsData;
test.describe("", async () => {


  test.afterAll("tearDown", async ({ browser }) => {
    await browser.close();
  });

  test("Button Automation", async ({ page, letCodeButtonPage }) => {

    await test.step("Launch Letcode.in", async () => {
      await page.goto(testData.testUrl, { waitUntil:"load" });
      await page.waitForTimeout(5000);
      expect(page.url()).toBe(testData.testUrl);
    });

    await test.step("Explore Button Actions", async () => {
      await letCodeButtonPage.buttonTab.click();
      //click button
      await letCodeButtonPage.homeButton.click();
      expect(page.url()).toBe(testData.homePageUrl);
      await letCodeButtonPage.workSpaceButton.click({ timeout:30000 });
      await letCodeButtonPage.buttonTab.click();
      //Co ordinates of button
      const location = await letCodeButtonPage.locationButton.boundingBox();
      console.log("X co-ordinate is ->" + location?.x);
      console.log("Y co-ordinate is ->" + location?.y);
      //css Attribute of button
      const color = await letCodeButtonPage.colorButton.evaluate((el)=>{
        return window.getComputedStyle(el).getPropertyValue("background-color");
      });
      expect(color).toEqual(testData.button.background_color);
      //position of button
      const position = await letCodeButtonPage.positionButton.boundingBox();
      console.log("Height of the button is  is ->" + position?.height);
      console.log("Width of the button is ->" + position?.width);
      //disabled button
      const isDisabled = await letCodeButtonPage.disabledButton.isDisabled();
      expect(isDisabled).toBeTruthy();
      //click and hold button
      await letCodeButtonPage.clickAndHoldButton.click({ delay:3000 });
      const longPressedMsg = await letCodeButtonPage.clickAndHoldButton.textContent();
      expect(longPressedMsg).toBe(testData.button.longPressMsg);
    });




  });
});


