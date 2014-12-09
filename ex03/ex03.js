// MY FIRST I/O!
// Exercise 3 of 13

var fs = require('fs');

var path = process.argv[2];
var str = fs.readFileSync(path).toString();
var textSplit = str.split('\n');

console.log(textSplit.length - 1);
