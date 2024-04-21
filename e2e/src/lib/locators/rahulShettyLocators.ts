export class RahulShettyLocators {

  public get rahulShettyLogin () {
    return {
      userName: "#userEmail",
      password: "#userPassword",
      loginButton: "[value='Login']",
    };
  }
  public get HomePage () {
    return {
      ordersButton: "//button[@routerlink=\"/dashboard/myorders\"]",
      rowOrderId:(id: string)=>`//tbody//tr//th[text()='${id}']/..//button[text()='View']`,
      orderIdCheckOutPage: "//small[text()='Order Id']//following-sibling::div"
    };
  }

}
