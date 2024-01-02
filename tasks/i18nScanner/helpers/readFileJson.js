import fs from 'fs';

const readFileJson = async (strPath) => {
  const data = await fs.promises.readFile(strPath, 'utf8');
  const json = JSON.parse(data);
  return json;
};

export default readFileJson;
