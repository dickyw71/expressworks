/**
 * Express.js app with a home page rendered by the Pug (was Jade) template engine.
 */

var express = require('express');
var app = express();
var port = process.argv[2];
var templatePath = process.argv[3];

app.set('views', process.argv[3]);
app.set('view engine', 'jade');
app.get('/home', function(req, res) {
    res.render('index', {date: new Date().toDateString()});
});
app.listen(port);