var http = require('http');

http.createServer(function (req, res) {

    console.log('Request received');

    res.writeHead(200, { 
        //'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*', // implementation of CORS
	'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    });
    req.on('data', function (chunk) {
        console.log('GOT DATA!');
	console.log("Data is: " + chunk);
	// console.log("Type is: " + typeof chunk);
	// console.log(chunk.UserId);
	var jsonData = JSON.parse(chunk);
	console.log("Parsed data is: " + jsonData.UserId);
    });

    res.end('{"msg": "OK"}'); // removed the 'callback' stuff

}).listen(8080);
console.log('Server running at 8080');
