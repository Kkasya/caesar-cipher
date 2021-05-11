# Install
### To install this project clone it on your PC: https://github.com/Kkasya/caesar-cipher -b develop
### Open cloned folder in your code editor and install dependencies with -npm i

# Start
### To start program you must enter *a shift (--shift or -s)* - an integer (positive or not), and *an action (--action or -s) - decode or encode.*.
### For example: 
```sh
node index.js -s 1 -a encode
```
### Then you can enter any text on the command line and you will get the output of the program on the command line:
```sh
Hello
Ifmmp
```
### If you want to read from a file you must enter the path to the input file (--input or -i) - an absolute or relative path:
```sh
node index.js -s 1 -a encode -i user.txt
Ipx bsf zpv?
```
### To write the result to a file you must enter the path to the output file (--output or -o) - - an absolute or relative path:
```sh
node index.js -s 1 -a encode -i user.txt -o result.txt
```

# Errors
### You will get an error, if you don't enter a shift or an action. And if the input and/or output file is given but doesn't exist or you can't read it.
```sh
node index.js -s 1 -a encode -i user.txt -o result
Such file doesn`t exist or can`t be read
```
```sh
node index.js -s -1 -a encod
Action is invalid. Please enter `encode` or `decode`.
```
```sh
node index.js -s a -a encode -i
Shift should be an integer!
```
