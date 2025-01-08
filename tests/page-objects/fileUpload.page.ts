import { $ } from '@wdio/globals';
import path from 'path';
import Page from './page';

class FileUploadPage extends Page {
    get chooseFileButton() {
        return $('#file-upload');
    }

    get uploadButton() {
        return $('#file-submit');
    }

    get uploadedFiles() {
        return $('#uploaded-files');
    }

    async uploadFile(fileName: string) {
        const filePath = path.join(__dirname, '../../resources/', fileName);
        await this.chooseFileButton.setValue(filePath);
        await this.uploadButton.click();
    }

    async getUploadedFileName() {
        return this.uploadedFiles.getText();
    }

    public open () {
        return super.open('upload');
    }
}

export default new FileUploadPage();