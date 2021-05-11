const fs = require('fs');
const {program} = require('commander');

const {myParseInt} = require('./check-data');
const {definePath} = require('./define-path');
const {err} = require('./show-error');
const {Transform} = require('./Transform');

let pathInput;
let pathOutput;
let action;

const setPath = (value, typePath) => {
  if (typePath === 'i') pathInput = definePath(value);
  else pathOutput = definePath(value);
};

const setTypeTransform = (value) => {
  if (value === 'encode' || value === 'decode') action = value;
  else err('Action is invalid. Please enter `encode` or `decode`.');
};

program
  .option('-s, --shift <number>', 'a shift', myParseInt)
  .option('-i, --input [string]', 'an input file', (value) => setPath(value, 'i'))
  .option('-o, --output [string]', 'an output file', (value) => setPath(value, 'o'))
  .option('-a, --action <string>', 'an action encode/decode', setTypeTransform);

program.parse(process.argv);

const options = program.opts();
if (!options.shift && (Number(options.shift) !== 0)) err('Shift (s) is required option. Please enter it.');
if (!options.action) err('Action (a) is required option. Please enter it.');

const transform = new Transform(options.shift, action);

const read = (pathInput) ? fs.createReadStream(pathInput) : process.stdin;
const write = (pathOutput) ? fs.createWriteStream(pathOutput, {flags: 'a'}) : process.stdout;
read.pipe(transform).pipe(write);





