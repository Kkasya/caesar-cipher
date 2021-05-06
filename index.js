const stream = require('stream');
const fs = require('fs');
const path = require('path');
const { program } = require('commander');
const commander = require('commander');
const {myParseInt} = require('./check-data');

const write = process.stdout;

const setPath = (value, typePath) => {
  console.log(value, typePath)
}

const setTypeTransform = (value) => {

}

program
  .option('-s, --shift <number>', 'a shift', myParseInt)
  .option('-i, --input <string>', 'an input file', (value) => setPath(value, 'i') )
  .option('-o, --output <string>', 'an output file', (value) => setPath(value, 'o'))
  .option('-a, --action <string>', 'an action encode/decode', setTypeTransform);

program.parse(process.argv);


const options = program.opts();
if (!options.shift) console.log('options');

