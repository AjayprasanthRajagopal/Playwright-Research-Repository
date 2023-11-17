import test from "../../fixtures/baseFixtures";
import { expect } from "@playwright/test";
import { shadowData } from "../../lib/testData/index";

const testData = shadowData;

test.describe("", async () => {


  test.afterAll("tearDown", async ({ browser }) => {
    await browser.close();
  });

  test("Shadow Dom", async ({ page, shadowDom }) => {

    await test.step("Launch Shadow Dom URL", async () => {
      await page.goto(testData.testUrl, { waitUntil:"load" });
      await page.waitForTimeout(5000);
      expect(page.url()).toBe(testData.testUrl);
    });

    await test.step("Interact with Shadow Elements", async () => {
      await shadowDom.buttonOutsideShadow.click();
      const outSideButtonText = await shadowDom.buttonOutsideShadow.innerText();
      expect(outSideButtonText).toBe(testData.buttonOutside);
      console.log("Text on Button outside Shadow Dom=>" + outSideButtonText);
      await shadowDom.buttonOutsideShadow.click();
      const insideButtonText = await shadowDom.buttonInsideShadow.innerText();
      expect(insideButtonText).toBe(testData.buttonInsideShadowDom);
      console.log("Text on Button Inside Shadow Dom=>" + insideButtonText);
      console.log(testData.environment);
    });

  });

});
