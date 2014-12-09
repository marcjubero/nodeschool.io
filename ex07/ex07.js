// HTTP CLIENT
// Exercise 7 of 13

var http = require('http'),
    url = process.argv[2];

http.get(url, function(response) {
    response.on("error", function(err) {
        console.log("Error: " + err.message);
    });
    response.on("data", function(data) {
        console.log(data.toString());
    });
});
