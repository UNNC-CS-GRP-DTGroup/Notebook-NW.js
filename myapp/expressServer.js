var express = require("express");
var http = require('http');
var bodyParser = require("body-parser");
var expressMongoDb = require("express-mongo-db");
// var mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost:27017/NotebookApp");
// console.log("db starts");

var app = express();

app.use(expressMongoDb('mongodb://localhost:27017/NoteTakingApp'));
console.log("db starts");

app.use(bodyParser.text());

console.log("server starts");

app.use(function(req, res, next) {
	console.log("run");
	res.header('Access-Control-Allow-Origin', '*'); 
	res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
//    res.header( 'Content-Type' ,'application/x-www-form-urlencoded; charset=UTF-8');
	//res.header('Access-Control-Allow-Headers', 'X-Requested_With'); 
	// console.log(req);
	next();
});


app.post("/updateAll", function(req, res) {
	// res.header('Access-Control-Allow-Origin', '*'); // implementation of CORS
	console.log("get data");
	console.log(req);
    	console.log("Body is: " + req.body);
	var parsedData = JSON.parse(req.body);
    	console.log("The UserId is: " + parsedData.UserInfo.UserId);
	req.db.collection('allAppData').insert(parsedData, function(err, data) {
		if(err) console.log(err);
		else {
			console.log("data saved to db");
		}
	});
});

app.listen(8000);
