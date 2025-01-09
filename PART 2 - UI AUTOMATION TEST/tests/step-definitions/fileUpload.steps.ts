import { Given, When, Then } from '@wdio/cucumber-framework';
import FileUploadPage from '../page-objects/fileUpload.page';
import { expect} from '@wdio/globals'

const pages = {
    fileUpload: FileUploadPage
}

Given('I am on the {string} page', async (page) => {
    await pages[page].open()
});

When('I upload a file named {string}', async (fileName: string) => {
    await FileUploadPage.uploadFile(fileName);
});

Then('I should see the uploaded file name {string}', async (expectedFileName: string) => {
    const uploadedFileName = await FileUploadPage.getUploadedFileName();
    await expect(uploadedFileName).toEqual(expectedFileName);
});