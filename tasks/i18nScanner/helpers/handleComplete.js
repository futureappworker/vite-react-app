import merge from 'deepmerge-json';
import getTargetLng from './getTargetLng.js';
import readFileJson from './readFileJson.js';
import setToLocal from './setToLocal.js';

const handleComplete = async (matchPaths) => {
  // 格式:
  // {
  //   'en-US': { LoginPage: { login: 'login' }, SamplePage: { title: 'Sample' } },
  //   'zh-CN': { LoginPage: { login: '登录' }, SamplePage: { title: '範例' } }
  // }
  const lngMap = {};
  for (let index = 0; index < matchPaths.length; index += 1) {
    const matchPath = matchPaths[index];
    const targetLng = getTargetLng(matchPath);
    if (targetLng) {
      if (!lngMap[targetLng]) {
        lngMap[targetLng] = {};
      }
      // eslint-disable-next-line no-await-in-loop
      const json = await readFileJson(matchPath);
      lngMap[targetLng] = merge(lngMap[targetLng], json);
    }
  }
  const allPromises = [];
  Object.keys(lngMap).forEach((key) => {
    // 將是 translation path 的 json，存入對應的 local json
    allPromises.push(
      setToLocal({
        lng: key,
        json: lngMap[key],
      }),
    );
  });
  await Promise.all(allPromises);
};

export default handleComplete;
