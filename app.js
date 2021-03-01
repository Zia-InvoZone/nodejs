const fs = require('fs');
const os = require('os');
const envv = require('dotenv').config();

const path = envv.parsed.PATH;
fs.writeFile(`${path}.txt`, '', () => {
  // eslint-disable-next-line no-console
  console.log('Clear File!');
});
fs.appendFile(`${path}.txt`, JSON.stringify(os.userInfo()), (err) => {
  if (err) throw err;
  // eslint-disable-next-line no-console
  console.log('Saved!');
});
