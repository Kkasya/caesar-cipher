const myParseInt = (value) => {
  const parsedValue = Number(value);

  if (isNaN(parsedValue) || !((parsedValue ^ 0) === parsedValue)) {
    process.stderr.write('shift should be an integer!');
    process.exit(1);
  }
  return parsedValue;
}

module.exports = {myParseInt};