// pages/heroku/UploadPage.js
import path from 'path';
import {expect} from '@playwright/test';

export class UploadPage {
    /** @param {import('@playwright/test').Page} page */
    constructor(page){
        this.page = page;
        this.fileInput = page.locator('input#file-upload');
        this.uploadButton = page.locator('input#file-submit');
        this.resultHeader = page.getByRole('heading', {name: 'File Uploaded!'});
        this.uploadedFiles = page.locator('#uploaded-files');
    }

    async goto(){
        await this.page.goto('https://the-internet.herokuapp.com/upload', {waitUntil: 'domcontentloaded'});
        await this.fileInput.waitFor({state: 'visible'});
    }

    async upload(filePath){
        await this.fileInput.waitFor({state: 'visible'});
        const absolutePath = path.resolve(filePath);
        await this.fileInput.setInputFiles([absolutePath]);
        await Promise.all([
            this.page.waitForNavigation({waitUntil: 'domcontentloaded'}),
            this.uploadButton.click(),
        ]);
        await this.resultHeader.waitFor({state: 'visible'});
    }

    async expectUploaded(filename) {
        await expect(this.resultHeader).toBeVisible({timeout: 15000});
        await expect(this.uploadedFiles).toHaveText(filename, {timeout: 15000});
    }
}

export const uploadPage = (page) => new UploadPage(page);
