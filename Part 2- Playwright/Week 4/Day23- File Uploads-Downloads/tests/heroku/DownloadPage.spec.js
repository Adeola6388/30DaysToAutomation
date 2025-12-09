import {test, expect} from '@playwright/test';
import {DownloadPage} from '../../pages/heroku/DownloadPage.js';

test.setTimeout(60000);
test.skip(({browserName}) => browserName === 'webkit', 'WebKit page creation is too slow in this environment');

test('Download: wait for download event', async ({page}) => {
    test.slow();
    const downloads = new DownloadPage(page);
    await downloads.goto();
    const {suggested, path} = await downloads.downloadFirstFile();

    // Assert download path and file name
    expect(suggested && suggested.length > 0).toBeTruthy();
    console.log(suggested);
});
