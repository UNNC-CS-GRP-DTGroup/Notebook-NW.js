var http = require('http');
http.createServer(function (req, res) {

    console.log('Request received');

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    req.on('data', function (chunk) {
        console.log('GOT DATA!');
	console.log("data is: " + chunk);
    });
    res.end('callback(\'{\"msg\": \"OK\"}\')');

}).listen(8080);
console.log('Server running at 8080');
