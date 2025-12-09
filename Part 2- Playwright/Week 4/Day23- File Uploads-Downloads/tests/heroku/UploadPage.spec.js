import {test} from '@playwright/test';
import {uploadPage} from '../../pages/heroku/UploadPage.js';

test.setTimeout(120000);
test.skip(({browserName}) => browserName === 'webkit', 'WebKit page creation is too slow in this environment');

test('Upload: setInputFiles then verify upload', async ({page}) => {
  test.slow();
  const upload = uploadPage(page);
  await upload.goto();

  // Put a sample file in test-data/files/sample.txt
  const file = 'test-data/files/sample.txt';
  await upload.upload(file);
  await upload.expectUploaded('sample.txt');
});
