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
} 