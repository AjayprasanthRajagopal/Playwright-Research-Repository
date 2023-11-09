import { test, expect, Page } from '@playwright/test';
import { LetCodeDropDownPage } from '../pages/letcode.dropdown.po';
import * as testData from "../testData/letCode"
test.describe("", async () => {


  test.afterAll('tearDown', async ({ browser }) => {
    console.log("Tearing down")
    await browser.close();
  })

  test('DropDown Automation', async ({ page }) => {
    const letCode = new LetCodeDropDownPage(page);

    await test.step('Launch Letcode.in', async () => {
      await page.goto(testData.letCode.testUrl, { waitUntil: 'load' });
      expect(page.url()).toBe(testData.letCode.testUrl)
    });

    await test.step('Click DropDown tab', async () => {
      await letCode.clickDropDownTab();
      //select single value from dropdown
      await letCode.fruitsDropDown().selectOption({ label: testData.letCode.dropDown.fruit });
      const notification1 = await letCode.fruitNotification().textContent();
      expect(notification1).toBe(testData.letCode.dropDown.notification(testData.letCode.dropDown.fruit));
      //select Multiple  value from dropdown
      await letCode.superHeroesDropDown().selectOption(testData.letCode.dropDown.superHeroes);
      const languageDropDownValues = await letCode.languageDropDown().allInnerTexts();
      languageDropDownValues.forEach(lang => {
        console.log("Values are ==>" + lang)
      })
      await letCode.languageDropDown().selectOption(testData.letCode.dropDown.language);
      const notification2 = await letCode.secondNotification().textContent();
      await letCode.countryDropDown().selectOption(testData.letCode.dropDown.country);
      
    })



  })
})


