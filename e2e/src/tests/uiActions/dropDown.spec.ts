import test from "../../fixtures/baseFixtures";
import { expect } from "@playwright/test";
import configSetup from "../../config/configSetup";

const suite = "uiActions" ;
const testData = configSetup(suite);
test.describe("", async () => {


  test.afterAll("tearDown", async ({ browser }) => {
    console.log("Tearing down");
    await browser.close();
  });

  test("DropDown Automation", async ({ page, letCodeDropDownPage }) => {

    await test.step("Launch Letcode.in", async () => {
      await page.goto(testData.testUrl, { waitUntil: "load" });
      await page.waitForTimeout(5000);
      expect(page.url()).toBe(testData.testUrl);
    });

    await test.step("Explore DropDown Actions", async () => {
      await letCodeDropDownPage.dropDownTab.click();
      //select single value from dropdown
      await letCodeDropDownPage.fruitsDropDown.selectOption({ label: testData.dropDown.fruit });
      const notification1 = await letCodeDropDownPage.fruitNotification.textContent();
      expect(notification1).toBe(testData.dropDown.notification(testData.dropDown.fruit));
      //select Multiple  value from dropdown
      await letCodeDropDownPage.superHeroesDropDown.selectOption(testData.dropDown.superHeroes);
      const languageDropDownValues = await letCodeDropDownPage.languageDropDown.allInnerTexts();
      languageDropDownValues.forEach(lang => {
        console.log("Values are ==>" + lang);
      });
      await letCodeDropDownPage.languageDropDown.selectOption(testData.dropDown.language);
      const notification2 = await letCodeDropDownPage.secondNotification.textContent();
      expect(notification2).toBe(testData.dropDown.notification(testData.dropDown.language));
      await letCodeDropDownPage.countryDropDown.selectOption(testData.dropDown.country);

    });



  });
});


