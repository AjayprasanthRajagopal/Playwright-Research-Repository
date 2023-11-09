import { Page } from "@playwright/test";
import { LetCodeLocators } from "../locators/letCodeLocators";

export class LetCodeWindowPage {

    private locators: LetCodeLocators;
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        this.locators = new LetCodeLocators();
    }


    async clickWindowTab() {
        await this.page.locator(this.locators.windowPageObjects.windowTab).click();
    }

    homeTab() {
        return this.page.locator(this.locators.windowPageObjects.homeTab)
    }

}