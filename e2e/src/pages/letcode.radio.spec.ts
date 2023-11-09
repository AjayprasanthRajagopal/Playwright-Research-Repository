import { Page } from "@playwright/test";
import { LetCodeLocators } from "../locators/letCodeLocators";

export class LetCodeRadioPage {

    private locators: LetCodeLocators;
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        this.locators = new LetCodeLocators();
    }


    async clickRadioTab() {
        await this.page.locator(this.locators.radioButtonPageObject.radioButtonTab).click();
    }

    YesRadio() {
        return this.page.locator(this.locators.radioButtonPageObject.radioYes)
    }

    preselectedRadio() {
        return this.page.locator(this.locators.radioButtonPageObject.preSelectedRadio)
    }
    disabledRadio() {
        return this.page.locator(this.locators.radioButtonPageObject.disabledRadio)
    }
    preselectedCheckbox() {
        return this.page.locator(this.locators.radioButtonPageObject.rememberMeCheckbox)
    }
    termsAndConditionCheckbox() {
        return this.page.locator(this.locators.radioButtonPageObject.termsAndConditionsCheckbox)
    }
}