import test from "../../fixtures/baseFixtures";
import { expect } from "@playwright/test";
import * as testData from "../../lib/testData/shadowDom";

test.describe("", async () => {


  test.afterAll("tearDown", async ({ browser }) => {
    await browser.close();
  });

  test("Shadow Dom", async ({ page, shadowDom }) => {

    await test.step("Launch Shadow Dom URL", async () => {
      await page.goto(testData.shadowDom.testUrl, { waitUntil:"load" });
      await page.waitForTimeout(5000);
      expect(page.url()).toBe(testData.shadowDom.testUrl);
    });

    await test.step("Interact with Shadow Elements", async () => {
      await shadowDom.buttonOutsideShadowDom().click();
      const outSideButtonText = await shadowDom.buttonOutsideShadowDom().innerText();
      expect(outSideButtonText).toBe(testData.shadowDom.buttonOutside);
      console.log("Text on Button outside Shadow Dom=>" + outSideButtonText);
      await shadowDom.buttonOutsideShadowDom().click();
      const insideButtonText = await shadowDom.buttonInsideShadowDom().innerText();
      expect(insideButtonText).toBe(testData.shadowDom.buttonInsideShadowDom);
      console.log("Text on Button Inside Shadow Dom=>" + insideButtonText);


    });

  });

});
