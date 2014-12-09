// MY FIRST ASYNC I/O!
// Exercise 4 of 13

var fs = require('fs');

var path = process.argv[2];

function countLines() {
    fs.readFile(path, function processAndCount(err, data) {
        console.log(data.toString().split('\n').length - 1);
    })
}

countLines();
