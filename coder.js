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

module.exports = {coder};