import { expect, request } from "@playwright/test";
import test from "../../fixtures/baseFixtures";
import { APIUtils } from "../../../../utils/ApiUtils";
let response;
const loginPayLoad = { userEmail: "itzmeajay@yahoo.com", userPassword: "Ajay@2023" };
const createOrderPayLoad = { orders: [{ country: "Cambodia", productOrderedId: "6581ca979fd99c85e8ee7faf" }] };

test.beforeAll(async () => {
  //Login API
  const apiContext = await request.newContext();
  const apiUtils = new APIUtils(apiContext, loginPayLoad);
  for (let i = 0;i <= 10;i++) {
    response = await apiUtils.createOrder(createOrderPayLoad);
  }
});

test.only("Create ORder", async ({ page, rahulShetty }) => {

  //Inject Token to Session Storage
  await page.addInitScript(tokenKey => {
    window.localStorage.setItem("token", tokenKey); // token: value  key value pair>> value passed as parameter
  }, response.token);
  await page.goto("https://rahulshettyacademy.com/client");
  await rahulShetty.orderButton.click();
  await page.waitForSelector("tbody");
  const rowCount = await page.locator("//tbody//tr").count();
  console.log("Total number of rows " + rowCount);

  for (let i = 1; i <= rowCount; ++i) {
    const rowOrderId = await page.locator(`(//tbody//tr//th)[${i}]`).textContent();
    if (response.orderId.includes(rowOrderId)) {
      await rahulShetty.rowOrderId(rowOrderId).click({ timeout:4000 });
      break;
    }
  }
  await page.waitForLoadState();
  const orderIdDetails = await rahulShetty.orderIdCheckOutPage.textContent();
  expect(response.orderId.includes(orderIdDetails)).toBeTruthy();

});


