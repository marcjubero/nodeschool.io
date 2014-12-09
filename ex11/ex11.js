// HTTP FILE SERVER
// Exercise 11 of 13

var http = require('http'),
    fs = require('fs'),
    port = process.argv[2],
    loc = process.argv[3];


var server = http.createServer(function(req, res) {
    var stream = fs.createReadStream(loc);
    stream.pipe(res);
});

server.listen(port);
