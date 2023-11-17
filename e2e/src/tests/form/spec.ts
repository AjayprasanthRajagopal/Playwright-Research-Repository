import test from "../../fixtures/baseFixtures";
import { expect } from "@playwright/test";
import { DateTimeUtility } from "../../lib/utility/utility";
import configSetup from "../../config/configSetup";

const suite = "form" ;
const testData = configSetup(suite);

test.describe("", async () => {
  test.use({
    viewport: { width: 733, height: 689 },
  });

  test.afterAll("tearDown", async ({ browser }) => {
    await browser.close();
  });

  test("Form Automation", async ({ page, form }) => {
    const  util = new DateTimeUtility();

    await test.step("Launch DemoQA.in", async () => {
      await page.goto(testData.testUrl, { waitUntil:"load" });
      await page.waitForTimeout(5000);
      expect(page.url()).toBe(testData.testUrl);
    });


    await test.step("Fill form", async () => {
      await form.firstNameTextbox.fill(testData.form.firstName);
      await form.lastNameTextbox.fill(testData.form.lastName);
      await form.enterEmailTextbox.fill(testData.form.userEmail);
      await form.mobileNoTextbox.fill(testData.form.mobileNumber);
      await form.genderRadio(testData.form.gender).setChecked(true);
      const dateOfBirth = util.convertDateFormat(testData.form.DOB);
      await form.dobTextbox.fill(dateOfBirth);
      await page.keyboard.press("Enter");
      await form.subjectTextbox.click();
      await form.subjectEnterTextbox.fill(testData.form.subjects);
      await page.keyboard.press("ArrowDown");
      await page.keyboard.press("Enter");
      const address = await util.currentTime;
      await page.setInputFiles(form.uploadPictureButton, testData.form.pictureURL);
      await form.hobbiesCheckbox(testData.form.hobbies[0]).setChecked(true);
      await form.hobbiesCheckbox(testData.form.hobbies[1]).setChecked(true);
      await form.currentAddressTextbox.fill(testData.form.currentAddress + " uploaded Time " + address);
      await form.submitButton.click();
      const outputPath = "runTimeScreenshots/screenshot.png";
      await page.screenshot({ path: outputPath });
    });

  });

});
