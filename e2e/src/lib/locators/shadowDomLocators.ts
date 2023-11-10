export class ShadowDomLocators {

  public get shadow () {
    return {
      buttonOutsideShadowRoot: "//button[@id='my-btn']",
      buttonInsideShadowRoot: "#shadow-host #my-btn"
    };
  }

}
