// MAKE IT MODULAR
// Exercise 6 of 13

var mymodule = require('./mymodule.js'),
    path = process.argv[2];
    extension = process.argv[3];

var result = function(err, data) {
    if(err) throw err;
    else {
        var n = data.length;
        for(i = 0; i < n; i++) {
            //if(data[i].match('.' + extension))
            console.log(data[i]);
        }
    }
}


mymodule(path,extension, result);
