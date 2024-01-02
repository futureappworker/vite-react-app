import path from 'path';
import fs from 'fs';

const setToLocal = async (params) => {
  const { lng, json } = params;
  const __dirname = path.resolve();
  const directoryPath = path.join(__dirname, `src/i18n/locales/${lng}`, 'translation.json');
  const resultJson = json;

  await fs.promises.writeFile(directoryPath, JSON.stringify(resultJson, null, 2));

  // eslint-disable-next-line no-console
  console.log(`${lng}: Save completed!`);
};

export default setToLocal;
