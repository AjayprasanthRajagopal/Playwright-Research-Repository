import { test,expect } from '@playwright/test';
import { LetCodeDragAndDropPage } from '../pages/letcode.dragAndDrop.spec';
import * as testData from "../testData/letCode"
test.describe("", async () => {


   test.afterAll('TearDown', async ({ browser }) => {
   await browser.close();
  })

  test('Drag and Drop Automation', async ({ page }) => {
    var letCode = new LetCodeDragAndDropPage(page);

    await test.step('Launch Letcode.in', async () => {
      await page.goto(testData.letCode.testUrl,{waitUntil:'load'});
      expect(page.url()).toBe(testData.letCode.testUrl)
    });

    await test.step('Click Drag and Dro tab', async () => {
      await letCode.clickDragAndDropTab();
      await page.dragAndDrop(letCode.sourceLocation(),letCode.destinationLocation());
      await page.waitForTimeout(10000);
    });
    

  

  })

})


