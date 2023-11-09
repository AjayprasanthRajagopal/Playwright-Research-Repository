import test from "../fixtures/baseFixtures";
import { expect } from "@playwright/test";
import * as testData from "../testData/letCode";
test.describe("", async () => {


  test.afterAll("tearDown", async ({ browser }) => {
    console.log("Tearing down");
    await browser.close();
  });

  test("DropDown Automation", async ({ page, letCodeDropDownPage }) => {

    await test.step("Launch Letcode.in", async () => {
      await page.goto(testData.letCode.testUrl, { waitUntil: "load" });
      await page.waitForTimeout(5000);
      expect(page.url()).toBe(testData.letCode.testUrl);
    });

    await test.step("Click DropDown tab", async () => {
      await letCodeDropDownPage.clickDropDownTab();
      //select single value from dropdown
      await letCodeDropDownPage.fruitsDropDown().selectOption({ label: testData.letCode.dropDown.fruit });
      const notification1 = await letCodeDropDownPage.fruitNotification().textContent();
      expect(notification1).toBe(testData.letCode.dropDown.notification(testData.letCode.dropDown.fruit));
      //select Multiple  value from dropdown
      await letCodeDropDownPage.superHeroesDropDown().selectOption(testData.letCode.dropDown.superHeroes);
      const languageDropDownValues = await letCodeDropDownPage.languageDropDown().allInnerTexts();
      languageDropDownValues.forEach(lang => {
        console.log("Values are ==>" + lang);
      });
      await letCodeDropDownPage.languageDropDown().selectOption(testData.letCode.dropDown.language);
      const notification2 = await letCodeDropDownPage.secondNotification().textContent();
      expect(notification2).toBe(testData.letCode.dropDown.notification(testData.letCode.dropDown.language));
      await letCodeDropDownPage.countryDropDown().selectOption(testData.letCode.dropDown.country);

    });



  });
});


