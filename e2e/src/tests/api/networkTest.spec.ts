import { request } from "@playwright/test";
import test from "../../fixtures/baseFixtures";
import { APIUtils } from "../../../../utils/ApiUtils";
let response;
const loginPayLoad = { userEmail: "itzmeajay@yahoo.com", userPassword: "Ajay@2023" };
const createOrderPayLoad = { orders: [{ country: "Cambodia", productOrderedId: "6581ca979fd99c85e8ee7faf" }] };
const fakePayLoadOrders = { data: [], message: "No Orders" };
test.beforeAll(async () => {
  //Login API
  const apiContext = await request.newContext();
  const apiUtils = new APIUtils(apiContext, loginPayLoad);
  response = await apiUtils.createOrder(createOrderPayLoad);

});

test.only("Validate the Order Displayed but it wont show because we intercepted", async ({ page, rahulShetty }) => {

  //Inject Token to Session Storage
  await page.addInitScript(tokenKey => {
    window.localStorage.setItem("token", tokenKey); // token: value  key value pair>> value passed as parameter
  }, response.token);
  await page.goto("https://rahulshettyacademy.com/client");
  await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
    async route => {
      // intercepting response -> API response ->{Playwright fake response } browser -> render data on front end
      const response = await page.request.fetch(route.request());
      const body = JSON.stringify(fakePayLoadOrders);
      route.fulfill({
        response,
        body
      });
    });
  await rahulShetty.orderButton.click();
  await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");

});


