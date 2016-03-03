var express = require("express");
var http = require('http');
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());

console.log("server starts");

app.use(function(req, res, next) {
	console.log("run");
	res.header('Access-Control-Allow-Origin', '*'); 
	res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
	//res.header('Access-Control-Allow-Headers', 'X-Requested_With'); 
	// console.log(req);
	next();
});


app.post("*", function(req, res) {
	// res.header('Access-Control-Allow-Origin', '*'); // implementation of CORS
	console.log("get data");
	console.log(req.body);
});

app.listen(8000);
