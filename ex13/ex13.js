// HTTP JSON API SERVER
// Exercise 13 of 13

var http = require('http'),
    url = require('url'),
    port = Number(process.argv[2]);

function parsetime (time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

function unixtime (time) {
    return { unixtime : time.getTime() }
}

var server = http.createServer(function(req,res) {
    if(req.method === 'GET') {

        var parsed = url.parse(req.url, true);
        var time = new Date(parsed.query.iso);
        var result;

        if((req.url).toString().match('/api/parsetime')) {
            result = parsetime(time)
        } else if((req.url).toString().match('/api/unixtime')) {
            result = unixtime(time)
        }

        if(result) {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(result))
        } else {
            res.writeHead(404)
            res.end()
        }
    }
});

server.listen(port);
