// HTTP COLLECT
// Exercise 8 of 13

var http = require('http'),
    bl = require('bl'),
    url = process.argv[2];


http.get(url, function(response) {
    response.on("error", console.error);
    response.pipe(bl(function(err,data) {
        if(err) throw err;
        else {
            console.log(data.toString().length);
            console.log(data.toString())
        }
    }));
});
