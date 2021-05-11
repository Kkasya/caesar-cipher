const err = (message) => {
  const errorMessage = 'Error: ' + message;
  process.stderr.write(errorMessage);
  process.exit(1);
};

module.exports = {err};