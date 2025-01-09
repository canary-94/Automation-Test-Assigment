import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals'

import LoginPage from '../page-objects/login.page';
import SecurePage from '../page-objects/secure.page';

const pages = {
    login: LoginPage
}

Given('I am on the {string} page', async (page) => {
    await pages[page].open()
});

When('I login with {string} and {string}', async (username, password) => {
    await LoginPage.login(username, password)
});

Then('I should see a flash message saying {string}', async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
});

