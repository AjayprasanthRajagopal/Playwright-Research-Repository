export class FormLocators {

  public get form () {
    return {
      header: "//h5",
      firstNameTextbox: "First Name",
      lastNameTextbox: "Last Name",
      emailTextbox: "#userEmail",
      genderRadio:(gender: string)=> `//input[@name='gender']//following-sibling::label[text()='${gender}']`,
      mobileNoTextbox: "Mobile Number",
      DOBTextbox: "#dateOfBirthInput",
      subjectTextbox: ".subjects-auto-complete__value-container",
      hobbiesCheckbox:(hobbies: string)=> `//input[@type='checkbox']//following::label[contains(text(),'${hobbies}')]`,
      uploadFile:"#uploadPicture",
      currentAddress: "Current Address",
      stateDropdown: "#state",
      cityDropdown: "#city",
      submitButton: "#submit",
      closeButton: "#closeLargeModal"
    };
  }

}
