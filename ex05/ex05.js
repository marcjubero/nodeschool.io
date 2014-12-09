// FILTERED LS
// Exercise 5 of 13

var fs = require('fs'),
    path = process.argv[2],
    extension = process.argv[3];

fs.readdir(path, function ls(err,list) {
    var i = 0;
        l = list.length;

    for(i; i < l; i++) {
        if(list[i].match('.' + extension))
            console.log(list[i]);
    }
});
