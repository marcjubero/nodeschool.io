var fs = require('fs');

var res = [];

module.exports = function(path, extension, data) {
    fs.readdir(path, function(err, files) {
        if(err) return data(err);
        else{
            n = files.length;
            for(i = 0; i < n; i++) {
                if(files[i].match('.' + extension))
                    res.push(files[i])
            }

            return data(null, res);
        }

    });
}
