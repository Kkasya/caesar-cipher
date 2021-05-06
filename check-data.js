const {err} = require('./show-error');

const myParseInt = (value) => {
  const parsedValue = Number(value);

  if (isNaN(parsedValue) || !((parsedValue ^ 0) === parsedValue)) {
    err('shift should be an integer!');
  }
  return parsedValue;
}

module.exports = {myParseInt};