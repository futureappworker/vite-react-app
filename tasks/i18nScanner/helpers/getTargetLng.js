import { forEach } from 'lodash-es';

const VITE_LNGS = process.env.VITE_LNGS.split(' ');

const getTargetLng = (path) => {
  let targetLng;
  forEach(VITE_LNGS, (lng) => {
    const lngRegex = new RegExp(`${lng}.json$`);
    if (lngRegex.test(path)) {
      targetLng = lng;
    }
  });
  return targetLng;
};

export default getTargetLng;
