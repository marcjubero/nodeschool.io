// JUGGLING ASYNC
// Exercise 9 of 13

var http = require('http'),
    bl = require('bl'),
    urls = process.argv.slice(2),
    count = 0,
    res = [];

function printResults () {
    for (var i = 0; i < 3; i++)
        console.log(res[i])
}

function httpGet (index) {
    http.get(urls[index], function (response) {
        response.pipe(bl(function (err, data) {
            if (err) return console.error(err);
            else {
                res[index] = data.toString();
                count += 1;

                if (count == 3) printResults();
            }
        }));
    });
}

for (var i = 0; i < 3; i++)
    httpGet(i)
