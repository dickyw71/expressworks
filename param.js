/**
 * Express.js server that processes PUT /message/:id requests
 * and produces a SHA-1 hash of the current date combined with the ID from the URL.
 */

var express = require('express');
var app = express();
var port = process.argv[2];

app.put('/message/:id', function(req, res) {
  
    res.send(require('crypto')
        .createHash('sha1')
        .update(new Date().toDateString() + req.params.id)
        .digest('hex')
    );
})
app.listen(port);