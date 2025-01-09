import { $ } from "@wdio/globals";
import Page from "./page";

class CheckboxesPage extends Page {
    get firstCheckbox() { return $('input[type="checkbox"]:nth-child(1)'); }
    get secondCheckbox() { return $('input[type="checkbox"]:nth-child(3)'); }

    public open () {
        return super.open('checkboxes');
    }

    async toggleFirstCheckbox() {
        await this.firstCheckbox.click();
    }

    async toggleSecondCheckbox() {
        await this.secondCheckbox.click();
    }
}

export default new CheckboxesPage();