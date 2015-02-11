'use strict' ;

var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type' : 'text/plain',
  });

  var name = req.url.toString().split('/')[2];

  if(req.url == '/time') {
    var date = new Date().toString();
    res.write("The current time is " + date);
  } else if (req.url == '/greet/' + name) {
    res.write("Hello " + name);
  }

  res.end();
});

server.listen(3000);
