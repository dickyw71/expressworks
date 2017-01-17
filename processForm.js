/**
 * An express.js app that processes a traditional web form.
 */

var express = require('express');
var bodyparser = require('body-parser');
var app = express();
var port = process.argv[2];

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', function(req, res) {
    if(!req.body) return res.sendStatus(400);
    res.send(req.body.str.split('').reverse().join(''));
});

app.listen(port);