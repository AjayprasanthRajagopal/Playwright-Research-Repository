import test from "../../fixtures/baseFixtures";
import { RahulShettyPage } from "../../lib/pages/rahulShettyPage/rahulShetty.po";
let webContext;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const rahulShetty = new RahulShettyPage(page);
  await page.goto("https://rahulshettyacademy.com/client");
  await rahulShetty.userNameTextbox.fill("itzmeajay@yahoo.com");
  await rahulShetty.passwordTextBox.fill("Ajay@2023");
  await rahulShetty.loginButton.click();
  await page.waitForLoadState("networkidle");
  await context.storageState({ path: "LoggedInState.json" });
  webContext = await browser.newContext({ storageState: "LoggedInState.json" });
  await page.close();
});

test("Login", async () => {
  console.log("1st Test block");
  const page = await webContext.newPage();
  await page.goto("https://rahulshettyacademy.com/client");
  await page.close();
});
test("Login 2", async () => {
  console.log("2nd Test block");
  const page = await webContext.newPage();
  await page.goto("https://rahulshettyacademy.com/client");
  await page.close();
});


