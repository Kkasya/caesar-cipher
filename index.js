const stream = require('stream');
const fs = require('fs');
const path = require('path');
const {program} = require('commander');
const commander = require('commander');
const {myParseInt} = require('./check-data');
const {err} = require('./show-error');

let pathInput;
let pathOutput;

const setPath = (value, typePath) => {
  if (!(value.slice(-3) === 'txt')) err('Your file path is invalid. Please enter path with `.txt`');
  const pathIO = path.join(__dirname, value);
  fs.access(pathIO, fs.F_OK, (error) => {
    if (error) {
      err('Such file doesn`t exist or can`t be read');
    }
  });

  if (typePath === 'i') pathInput = pathIO;
  else pathOutput = pathIO;
}


const setTypeTransform = (value) => {
  return value;
}

class Transform extends stream.Transform {
  _transform(data, encoding, callback) {+
    this.push(data.toString().toUpperCase());
    callback();
  }
}

const transform = new Transform();

program
  .option('-s, --shift <number>', 'a shift', myParseInt)
  .option('-i, --input <string>', 'an input file', (value) => setPath(value, 'i'))
  .option('-o, --output <string>', 'an output file', (value) => setPath(value, 'o'))
  .option('-a, --action <string>', 'an action encode/decode', setTypeTransform);

program.parse(process.argv);


const options = program.opts();
if (!options.shift) err('Shift (s) is required option. Please enter it.');
if (!options.action) err('Action (a) is required option. Please enter it.');


const read = (pathInput) ? fs.createReadStream(pathInput) : process.stdin;
const write = (pathOutput) ? fs.createWriteStream(pathOutput, {flags: 'a'}) : process.stdout;
read.pipe(transform).pipe(write);





