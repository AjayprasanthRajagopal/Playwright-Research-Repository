import test from "../../fixtures/baseFixtures";
import { expect } from "@playwright/test";
import { DateTimeUtility } from "../../lib/utility/utility";
import * as testData from "../../lib/testData/demoQaForm";

test.describe("", async () => {
  test.use({
    viewport: { width: 733, height: 689 },
  });

  test.afterAll("tearDown", async ({ browser }) => {
    await browser.close();
  });

  test("Form Automation", async ({ page, form }) => {
    const  util = new DateTimeUtility(page);

    await test.step("Launch DemoQA.in", async () => {
      await page.goto(testData.demoQaForm.testUrl, { waitUntil:"load" });
      await page.waitForTimeout(5000);
      expect(page.url()).toBe(testData.demoQaForm.testUrl);
    });

    await test.step("Fill form", async () => {
      await form.firstNameTextbox().fill(testData.demoQaForm.form.firstName);
      await form.lastNameTextbox().fill(testData.demoQaForm.form.lastName);
      await form.enterEmailTextbox().fill(testData.demoQaForm.form.userEmail);
      await form.mobileNoTextbox().fill(testData.demoQaForm.form.mobileNumber);
      await form.genderRadio(testData.demoQaForm.form.gender).setChecked(true);
      const dateOfBirth = util.convertDateFormat(testData.demoQaForm.form.DOB);
      await form.dobTextbox().fill(dateOfBirth);
      await page.keyboard.press("Enter");
      await form.selectSubject(testData.demoQaForm.form.subjects);
      await page.keyboard.press("ArrowDown");
      await page.keyboard.press("Enter");
      await page.setInputFiles(form.uploadPictureButton(), testData.demoQaForm.form.pictureURL);
      await form.hobbiesCheckbox(testData.demoQaForm.form.hobbies[0]).setChecked(true);
      await form.hobbiesCheckbox(testData.demoQaForm.form.hobbies[1]).setChecked(true);
      await form.currentAddressTextbox().fill(testData.demoQaForm.form.currentAddress);
      await form.submitButton().click();
      await page.screenshot({ path: "screenshot.png" });
    });

  });

});
