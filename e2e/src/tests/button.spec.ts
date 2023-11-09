import { test, expect } from "@playwright/test";
import { LetCodeButtonPage } from "../pages/letcode.button.po";
import * as testData from "../testData/letCode";
test.describe("", async () => {


  test.afterAll("tearDown", async ({ browser }) => {
    await browser.close();
  });

  test("Button Automation", async ({ page }) => {
    const letCode = new LetCodeButtonPage(page);

    await test.step("Launch Letcode.in", async () => {
      await page.goto(testData.letCode.testUrl, { waitUntil:"load" });
      await page.waitForTimeout(5000);
      expect(page.url()).toBe(testData.letCode.testUrl);
    });

    await test.step("Click Button tab", async () => {
      await letCode.clickButtonTab();
      //click button
      await letCode.homeButton().click();
      expect(page.url()).toBe(testData.letCode.homePageUrl);
      await letCode.workSpaceButton().click();
      await letCode.clickButtonTab();
      //Co ordinates of button
      const location = await letCode.locationButton().boundingBox();
      console.log("X co-ordinate is ->" + location?.x);
      console.log("Y co-ordinate is ->" + location?.y);
      //css Attribute of button
      const color = await letCode.colorButton().evaluate((el)=>{
        return window.getComputedStyle(el).getPropertyValue("background-color");
      });
      expect(color).toEqual(testData.letCode.button.background_color);
      //position of button
      const position = await letCode.positionButton().boundingBox();
      console.log("Height of the button is  is ->" + position?.height);
      console.log("Width of the button is ->" + position?.width);
      //disabled button
      const isDisabled = await letCode.disabledButton().isDisabled();
      expect(isDisabled).toBeTruthy();
      //click and hold button
      await letCode.clickAndHoldButton().click({ delay:3000 });
      const longPressedMsg = await letCode.clickAndHoldButton().textContent();
      expect(longPressedMsg).toBe(testData.letCode.button.longPressMsg);
    });




  });
});


