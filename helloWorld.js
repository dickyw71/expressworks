/**
 * Express.js app that outputs "Hello World!" when somebody goes to /home
 */

var express = require('express');
var app = express();
var port = process.argv[2];

app.get('/home', function(req, res) {
    res.end('Hello World!');
});
app.listen(port);