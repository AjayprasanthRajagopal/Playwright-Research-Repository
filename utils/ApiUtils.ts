import { APIRequestContext, expect } from "@playwright/test";
export class APIUtils {

  apiContext: APIRequestContext;
  loginPayLoad: string;
  constructor (apiContext: APIRequestContext, loginPayload: any) {
    this.apiContext = apiContext;
    this.loginPayLoad = loginPayload;
  }
  async getToken () {
    const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", {
      data: this.loginPayLoad
    });
    expect(loginResponse.status()).toBe(200);
    expect(loginResponse.ok()).toBeTruthy();
    const loginResponeJson = await loginResponse.json();
    const token = loginResponeJson.token;
    return token;
  }

  async createOrder (createOrderPayLoad) {
    const response = {
      token:"",
      orderId: ""
    };
    response.token = await this.getToken();
    const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order", {
      data: createOrderPayLoad,
      headers: {
        "Authorization": response.token,
        "Content-Type": "application/json"
      }
    });
    const orderResponseJson = await orderResponse.json();
    const orderId = orderResponseJson.orders[0];
    console.log(orderResponseJson);
    console.log(orderId);
    response.orderId = orderId;
    return response;
  }

}
