import test from "../../fixtures/baseFixtures";
import * as testData from "../../lib/testData/letCode";


test.describe("", async () => {

  test.beforeEach("Launch Letcode.in ", async ({ page, letCodeAlertPage }) => {
    await page.goto(testData.letCode.testUrl, { waitUntil: "load" });
    await page.waitForTimeout(5000);
    await letCodeAlertPage.clickAlertTab();
  });

  test.afterAll("TearDown", async ({ browser }) => {
    await browser.close();
  });

  test("Accept Simple Alert", async ({ page, letCodeAlertPage }) => {
    page.on("dialog", async dialog => {
      console.log("dialog Msg-->" + dialog.message());
      console.log("dialog Type-->" + dialog.type());
      await dialog.accept();
    });
    await letCodeAlertPage.simpleAlert().click();
    await page.waitForLoadState();
  });

  test("Dismiss Confirm Alert", async ({ page, letCodeAlertPage }) => {
    page.on("dialog", async dialog => {
      console.log("dialog Msg-->" + dialog.message());
      console.log("dialog Type-->" + dialog.type());
      await dialog.dismiss();
    });
    await letCodeAlertPage.confirmAlert().click();
    await page.waitForLoadState();

  });


  test("Accept Confirm Alert", async ({ page, letCodeAlertPage }) => {
    page.on("dialog", async dialog => {
      console.log("dialog Msg-->" + dialog.message());
      console.log("dialog Type-->" + dialog.type());
      await dialog.accept();
    });
    await letCodeAlertPage.confirmAlert().click();
    await page.waitForLoadState();

  });
});


