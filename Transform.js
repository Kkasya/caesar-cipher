const stream = require('stream');
const {coder} = require('./coder');

class Transform extends stream.Transform {
  constructor(shift, action) {
    super();
    this.shift = shift;
    this.action = action;
  }
  _transform(data, encoding, callback) {
    const dataArr = data.toString().split('');
    dataArr.forEach((char) => {
      this.push(coder(char, this.shift, this.action));
    });
    callback();
  }
}
module.exports = {Transform};