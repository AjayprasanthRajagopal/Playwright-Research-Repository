export class LetCodeLocators {

  public get CommonPageObject () {
    return {
      header: "//h1",
      workSpace: "#testing",
    };
  }

  public get inputTextPageObject () {
    return {
      inputTab: "Edit",
      enterText: "#fullName",
      apendText: "#join",
      getText: "#getMe",
      clearText: "#clearMe",
      disabledText: "#noEdit",
      enabledText: "#dontwrite"

    };
  }

  public get buttonPageObject () {
    return {
      buttonTab: "Click",
      goToHomeButton: "#home",
      locationButton: "#position",
      colorButton: "#color",
      positionButton: "#property",
      disabledButton: "(//button[@Id='isDisabled'])[1]",
      holdButton: "(//button[@Id='isDisabled'])[2]//h2"

    };
  }


  public get dropDownPageObject () {
    return {
      dropDownTab: "//a[text()='Drop-Down']",
      fruitsDropDown: "#fruits",
      superHeroesDropDown: "#superheros",
      languageDropDown: "#lang",
      countryDropDown: "#country",
      notificationMsg1: "(//div[@class='notification is-success'])[1]",
      notificationMsg2: "(//div[@class='notification is-success'])[2]"

    };
  }

  public get alertPageObject () {
    return {
      alertTab: "//a[text()='Dialog']",
      simpleAlert: "#accept",
      confirmAlert: "#confirm",
      promptAlert: "#prompt",
      modernAlert: "#modern",
      modernAlertClose: "button[aria-label='close']"
    };
  }

  public get framePageObject () {
    return {
      frameTab: "Inner HTML",
      frame: "iframe[name=\"firstFr\"]",
      nestedFrame: "app-frame-content iframe",
      firstName: "Enter name",
      lastName: "Enter email",

    };
  }

  public get radioButtonPageObject () {
    return {
      radioButtonTab: "//a[text()='Toggle']",
      radioYes: "#yes",
      preSelectedRadio: "#notfoo",
      disabledRadio: "#maybe",
      rememberMeCheckbox: "(//input[@type='checkbox'])[1]",
      termsAndConditionsCheckbox: "(//input[@type='checkbox'])[2]"

    };
  }
  public get windowPageObjects () {
    return {
      windowTab: "//a[text()='Tabs']",
      homeTab: "#home",
    };
  }

  public get dragAndDropObjects () {
    return {
      drangAndDropTab: "AUI - 2",
      draggable: "#draggable",
      droppable: "#droppable"
    };
  }

  public get shadowDomPageObjects () {
    return {
      shadowDomTab: "AUI - 2",
      firstName: "#draggable",
      lastName: "#droppable",
      email: ""
    };
  }

}
