import { Page } from "@playwright/test";
import cookiespage from "../page-elements/cookies-page-elements.json";
import { WebCommons } from "../../commons/ui/web-commons";

export class CookiesPageSteps{

    page: Page;
    web: WebCommons;

    constructor(page: Page){
        this.page = page;
        this.web = new WebCommons(page);
    }

    //Method to verify cookies header is displayed
    async verifyCookiesPageIsDisplayed(){
        await this.web.isElementVisible(cookiespage.cookiesHeader);
    }

    // Method to verify the content of the cookies page
    async verifyCookiesContent(){
        await this.web.isElementVisible(cookiespage.cookiesContent);
    }

    //Method to verify the logo is displayed on the cookies page
    async verifyCookiesPopUpLogos(){
        await this.web.isElementVisible(cookiespage.creaioLogo);
        await this.web.isElementVisible(cookiespage.cookiesBotLogo);
    }

    // Method to verify all the selection buttons are displayed on the cookies page
    async verifyCookiesPopUpSelectionButtons(){
        await this.web.isElementVisible(cookiespage.allowAllBtn);
        await this.web.isElementVisible(cookiespage.allowSelectionBtn);
        await this.web.isElementVisible(cookiespage.denyBtn);
    }

    // Method to verify switch buttons are displayed on the cookies page
    async verifyCookiesPopUpSwitchButtons(){
        await this.web.isElementVisible(cookiespage.necessarySwitchBtn);
        await this.web.isElementVisible(cookiespage.preferencesSwitchBtn);
        await this.web.isElementVisible(cookiespage.statisticsSwitchBtn);
        await this.web.isElementVisible(cookiespage.marketingSwitchBtn);
    }
} 