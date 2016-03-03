var http = require('http');
var concat = require('concat-stream');

var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/NotebookApp");
var buf = '';

http.createServer(function (req, res) {

	console.log('Request received');

	
	res.on('data', function(d) {
      		buf += d;
		console.log(buf);
    	}).on('end', function() {
		res.writeHead(200, { 
			'Content-Type': 'text/plain',
			'Access-Control-Allow-Origin': '*', // implementation of CORS
			//'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
		});
		console.log('GOT DATA!');
		console.log("Data is: " + buf);
      		var jsonData = JSON.parse(buf);
	});


    	res.end('{"msg": "OK"}'); // removed the 'callback' stuff

}).listen(8080);
console.log('Server running at 8080');


