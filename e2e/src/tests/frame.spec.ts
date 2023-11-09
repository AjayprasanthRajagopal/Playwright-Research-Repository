import { test,expect } from '@playwright/test';
import { LetCodeFramePage } from '../pages/letcode.frame.po';
import * as testData from "../testData/letCode"
test.describe("", async () => {


   test.afterAll('TearDown', async ({ browser }) => {
   await browser.close();
  })

  test('Frame Automation', async ({ page }) => {
    const letCode = new LetCodeFramePage(page);

    await test.step('Launch Letcode.in', async () => {
      await page.goto(testData.letCode.testUrl,{waitUntil:'load'});
      expect(page.url()).toBe(testData.letCode.testUrl)
    });

    await test.step('Click Button tab', async () => {
      await letCode.clickFrameTab();
      //Handle single frame
      await letCode.firstName().pressSequentially(testData.letCode.frame.firstName,{timeout:2000});
      await letCode.lastName().pressSequentially(testData.letCode.frame.lastName,{timeout:2000});
      await letCode.email().pressSequentially(testData.letCode.frame.email,{timeout:2000});
    });
    

  

  })

})


