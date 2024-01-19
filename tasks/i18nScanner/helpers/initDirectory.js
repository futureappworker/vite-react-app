import path from 'path';
import fs from 'fs';
import { forEach } from 'lodash-es';

import setToLocal from './setToLocal.js';

const VITE_LNGS = process.env.VITE_LNGS.split(' ');

const initDirectory = async () => {
  const __dirname = path.resolve();
  const allPromises = [];
  forEach(VITE_LNGS, (lng) => {
    const directoryPath = path.join(__dirname, `src/i18n/locales/${lng}`);
    if (!fs.existsSync(directoryPath)) {
      fs.mkdirSync(directoryPath, { recursive: true });
    }
    allPromises.push(
      setToLocal({
        lng,
        json: {},
      }),
    );
  });
  await Promise.all(allPromises);
};

export default initDirectory;
