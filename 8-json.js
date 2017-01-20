/**
 * Express.js server that, when it receives a GET, reads a file, 
 * parses it to JSON, and responds with that content to the user.
 */

var express = require('express');
var fs = require('fs');
var app = express();
var port = process.argv[2];
var filename = process.argv[3];

console.log(filename);

app.get('/books', function(req, res) {

  fs.readFile(filename, function(err, data) {
      if (err) throw err;
      var booksJson = JSON.parse(data);
      res.json(booksJson);
    });
      
})
app.listen(port || 3000);