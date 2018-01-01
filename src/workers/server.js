var http = require('http');

//create a server object:
http.createServer(function (req, res) {

  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  if (req.method == 'POST') {
    var body = '';
    req.on('data', function (data) {
      body += data;
      console.log("Partial body: " + body);
    });
    req.on('end', function () {
      console.log("Body: " + body);
    });
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Thanks for your money!');
  }
  res.end(); //end the response

}).listen(8080); //the server object listens on port 8080
