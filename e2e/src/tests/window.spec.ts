import { test,expect } from '@playwright/test';
import { LetCodeWindowPage } from '../pages/letcode.window.spec';
import * as testData from "../testData/letCode"
test.describe("", async () => {


   test.afterAll('TearDown', async ({ browser }) => {
   await browser.close();
  })

  test('Window Handling Automation', async ({ page }) => {
    var letCode = new LetCodeWindowPage(page);

    await test.step('Launch Letcode.in', async () => {
      await page.goto(testData.letCode.testUrl,{waitUntil:'load'});
      expect(page.url()).toBe(testData.letCode.testUrl)
    });

    await test.step('Click Window tab', async () => {
      await letCode.clickWindowTab();

      const [newWindow] =await Promise.all([
        page.waitForEvent("popup"),
        await letCode.homeTab().click(),
      ]);

      console.log("New Window URL-->"+await newWindow.url());
      await newWindow.getByText("Inner HTML").click();
      console.log("Navigated from new Window to Frame  -->"+newWindow.url());

    });
    

  

  })

})


