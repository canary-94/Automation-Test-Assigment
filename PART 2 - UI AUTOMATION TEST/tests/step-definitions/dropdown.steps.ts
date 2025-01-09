import { Given, When, Then } from '@wdio/cucumber-framework';
import DropdownPage from '../page-objects/dropdown.page';
import { expect} from '@wdio/globals'

const pages = {
    dropdown: DropdownPage
}

Given('I am on the {string} page', async (page) => {
    await pages[page].open()
});

When('I select {string} from the dropdown', async (option: string) => {
    await DropdownPage.selectOption(option);
});

Then('{string} should be selected', async (option: string) => {
    const selectedOption = await DropdownPage.getSelectedOption();
    await expect(selectedOption).toEqual(option);
});