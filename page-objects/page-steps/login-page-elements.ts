import {Page} from "@playwright/test";
import loginpage from "../page-elements/login-page-elements.json";
import { WebCommons } from "../../commons/ui/web-commons";

export class LoginPageSteps{

    page: Page;
    web: WebCommons;
    constructor(page: Page){
        this.page = page;
        this.web = new WebCommons(page);
    }

    // Method to verify login page is displayed
    async verifyLoginPageIsDisplayed(){
        await this.web.isElementVisible(loginpage.loginHeader);
    }
    // Method to perform login action
    async performLogin(username: string, password: string){
        await this.web.typeText(loginpage.emailInput, username);
        await this.web.typeText(loginpage.passwordInput, password);
        await this.web.clickElement(loginpage.loginBtn);
    }
}