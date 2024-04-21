import test from "@playwright/test";
import { expect } from "@playwright/test";

test("@QA Security test request intercept", async ({ page }) => {

  //login and reach orders page
  await page.goto("https://rahulshettyacademy.com/client");
  //it should block the .jpg calls
  // page.route('**/*.{jpg,png,jpeg}',route => route.abort());
  page.on("request", request=> console.log(request.url()));
  page.on("response", response=> console.log(response.url(), response.status()));

  await page.locator("#userEmail").fill("anshika@gmail.com");
  await page.locator("#userPassword").fill("Iamking@000");
  await page.locator("[value='Login']").click();
  await page.waitForLoadState("networkidle");
  await page.locator(".card-body b").first().waitFor();

  await page.locator("button[routerlink*='myorders']").click();
  await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
    route => route.continue({ url: "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=621661f884b053f6765465b6" }));
  await page.locator("button:has-text('View')").first().click();
  await expect(page.locator("p").last()).toHaveText("You are not authorize to view this order");








});
