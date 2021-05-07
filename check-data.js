const {err} = require('./show-error');
const fs = require('fs');
const path = require('path');

const myParseInt = (value) => {
  const parsedValue = Number(value);

  if (isNaN(parsedValue) || !((parsedValue ^ 0) === parsedValue)) {
    err('shift should be an integer!');
  }
  return parsedValue;
};

const coder = (char, shift, action) => {
  const isAlpha = /[a-z]/i;
  if (isAlpha.test(char)) {

    if (shift < 0 || action === 'decode') {
      char = String.fromCharCode(char.charCodeAt(0) - Math.abs(shift));
      if (char > 'Z' && char < 'a' || char < 'A') {
        char = String.fromCharCode(char.charCodeAt(0) + 26);
      }
    } else {
      char = String.fromCharCode(char.charCodeAt(0) + shift);
      if (char > 'Z' && char < 'a' || char > 'z') {
        char = String.fromCharCode(char.charCodeAt(0) - 26);
      }
    }
  }
  return char;
};

const definePath = (value, typePath) => {
  if (!(value.slice(-3) === 'txt')) err('Your file path is invalid. Please enter path with `.txt`');

  const isRelativePath = value.startsWith('./') || value.startsWith('//');
  const pathIO = isRelativePath ? path.join(__dirname, value) : value;

  fs.access(pathIO, fs.F_OK, (error) => {
    if (error) {
      err('Such file doesn`t exist or can`t be read');
    }
  });
  return pathIO;
}

module.exports = {myParseInt, coder, definePath};