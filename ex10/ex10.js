// TIME SERVER
// Exercise 10 of 13

var net = require('net'),
    strftime = require('strftime'),
    port = process.argv[2];

// Output format => "YYYY-MM-DD hh:mm"

var server = net.createServer(function(socket) {

    socket.write(strftime('%Y-%m-%d %H:%M\n'));
    socket.end();
});

server.listen(port);
