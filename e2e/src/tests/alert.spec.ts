import test from "../fixtures/baseFixtures";
import { LetCodeAlertPage } from "../pages/letcode.alert.po";
import * as testData from "../testData/letCode";
test.describe("", async () => {


  test.beforeEach("Launch Letcode.in", async ({ page, letCodeAlertPage }) => {
    await page.goto(testData.letCode.testUrl, { waitUntil: "load" });
    await page.waitForTimeout(5000);
    await letCodeAlertPage.clickAlertTab();
  });

  test.afterAll("TearDown", async ({ browser }) => {
    await browser.close();
  });

  test("Accept Simple Alert", async ({ page }) => {
    const letCode = new LetCodeAlertPage(page);
    page.on("dialog", async dialog => {
      console.log("dialog Msg1-->" + dialog.message());
      console.log("dialog Type1-->" + dialog.type());
      await dialog.accept();
    });
    await letCode.simpleAlert().click();
    await page.waitForLoadState();
  });

  test("Dismiss Alert", async ({ page }) => {
    const letCode = new LetCodeAlertPage(page);
    page.on("dialog", async dialog => {
      console.log("dialog Msg1-->" + dialog.message());
      console.log("dialog Type1-->" + dialog.type());
      await dialog.dismiss();
    });
    await letCode.confirmAlert().click();
    await page.waitForLoadState();

  });


  test("Accept Confirm Alert", async ({ page }) => {
    const letCode = new LetCodeAlertPage(page);
    page.on("dialog", async dialog => {
      console.log("dialog Msg1-->" + dialog.message());
      console.log("dialog Type1-->" + dialog.type());
      await dialog.accept();
    });
    await letCode.confirmAlert().click();
    await page.waitForLoadState();

  });
});


