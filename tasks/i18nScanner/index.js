import FindFiles from 'node-find-files';
import path from 'path';

import testIsTranslationPath from './helpers/testIsTranslationPath.js';
import handleComplete from './helpers/handleComplete.js';

import initDirectory from './helpers/initDirectory.js';

const i18nScanner = async (cb) => {
  const __dirname = path.resolve();
  const findFiledirectoryPath = path.join(__dirname, 'src');

  await initDirectory();

  // scanner src 下所有的資料夾
  const finder = new FindFiles({
    rootFolder: findFiledirectoryPath,
    filterFunction: (strPath) => {
      // 過濾出是 translation 的 path
      return testIsTranslationPath(strPath);
    },
  });

  let matchPaths = [];
  finder.on('match', async (strPath) => {
    matchPaths.push(strPath);
  });

  finder.on('complete', async () => {
    await handleComplete(matchPaths);
    matchPaths = [];
    cb();
  });

  finder.startSearch();
};

export default i18nScanner;
