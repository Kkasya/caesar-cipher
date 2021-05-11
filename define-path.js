const fs = require('fs');
const path = require('path');
const {err} = require('./show-error');

const definePath = (value) => {
  if (!(value.slice(-3) === 'txt')) {
    err('Your file path is invalid. Please enter path with `.txt`');
  }

  const isRelativePath = value.startsWith('./') || value.startsWith('//');
  const pathIO = isRelativePath ? path.join(__dirname, value) : value;

  const isExist = fs.existsSync(pathIO);
  if (!isExist) err('Such file doesn`t exist or can`t be read');

  return pathIO;
};

module.exports = {definePath};