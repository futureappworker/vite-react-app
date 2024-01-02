import { forEach } from 'lodash-es';

const VITE_LNGS = process.env.VITE_LNGS.split(' ');

const testIsTranslationPath = (strPath) => {
  const regex1 = /translation/;
  const regex2 = /.json$/;

  let isHasInLngs = false;
  forEach(VITE_LNGS, (lng) => {
    const lngRegex = new RegExp(`${lng}.json$`);
    if (lngRegex.test(strPath)) {
      isHasInLngs = true;
    }
  });

  return regex1.test(strPath) && regex2.test(strPath) && isHasInLngs;
};

export default testIsTranslationPath;
