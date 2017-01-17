/**
 * Express.js app which generates a css file using Stylus middleware.
 */

var express = require('express');
var app = express();
var port = process.argv[2];
var middlewareFolder = process.argv[3];

app.use(require('stylus').middleware(middlewareFolder || path.join(__dirname, 'public')));

app.use(express.static(middlewareFolder || path.join(__dirname, 'public')));

app.listen(port);