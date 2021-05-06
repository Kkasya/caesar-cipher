const err = (message) => {
  process.stderr.write(message);
  process.exit(1);
};

module.exports = {err};