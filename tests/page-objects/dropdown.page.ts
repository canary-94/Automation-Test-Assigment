import { $ } from "@wdio/globals";
import Page from "./page";

class DropdownPage extends Page{
    get dropdown() {
        return $('#dropdown');
    }

    async selectOption(optionText: string) {
        await this.dropdown.selectByVisibleText(optionText);
    }

    async getSelectedOption() {
        return this.dropdown.$('option:checked').getText();
    }

    public open () {
        return super.open('dropdown');
    }
}

export default new DropdownPage();