/**
 * Express.js server that extracts query string parameters
 * and returns them as a JSON object.
 */

var express = require('express');
var app = express();
var port = process.argv[2];

app.get('/search', function(req, res) {
  
  res.send(req.query);

})
app.listen(port || 3000);