var port = Number(process.env.PORT || 3000);
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressMongoDb = require("express-mongo-db");

var app = express();


// make "node app.js" work on local machine, this use node's static file fetching
app.use('/', express.static ('./public'));
//general middleware
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json()); // get information from html forms
// app.use(cookieParser()); // read cookies (needed for auth)


var server = http.createServer(app);
server.listen(3000, function(){
  console.log('-----> SERVER STARTED ON PORT:', port, '<-----');
  console.log('-----> PROCESS PID:', process.pid, '<-----');
});


app.use(expressMongoDb('mongodb://localhost:27017/NoteTakingApp'));
console.log("db starts");

app.use('/updateAll', bodyParser.text());
app.use('/register', bodyParser.text());
app.use('/logIn', bodyParser.text());
//app.use(bodyParser.json());

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
	console.log("updateAll activated");
	// console.log(req);
    	console.log("Body is: " + req.body);
	var parsedData = JSON.parse(req.body);
	var UserId = parsedData.UserInfo.UserId;
    	console.log("The UserId is: " + parsedData.UserInfo.UserId);

	//req.db.collection('allAppData').insert(parsedData, function(err, data) {
	//	if(err) console.log(err);
	//	else {
	//		console.log("data saved to db");
	//	}
	//});

	var query = {"UserInfo.UserId": UserId};
	req.db.collection('allAppData').update(query, parsedData, function(err, data) {
		if(err) console.log(err);
		else {
			console.log("data updated to db");
		}
	});
});

app.post("/register", function(req, res) {
	// res.header('Access-Control-Allow-Origin', '*'); // implementation of CORS
	console.log("register activated");
	console.log("Body is: " + req.body);
	var parsedData = JSON.parse(req.body);

	//req.db.collection('allAppData').insert(parsedData, function(err, data) {
	//	if(err) console.log(err);
	//	else {
	//		console.log("data saved to db");
	//	}
	//});

	var findQuery = {"Email": parsedData.Email};
	req.db.collection('registeredUsers').findOne(findQuery, function(err, data) {
		if(err) {
			console.log(err);
			res.end('{"msg": "DB error", "status": "fail"}');
		}
		else {
			if(data) { // if existent
				res.end('{"msg": "Email has already been registered", "status": "fail"}');
			}
			else { // if not existent
				req.db.collection('registeredUsers').insert(parsedData, function(err, data) {
						if(err) {
							console.log(err);
							res.end('{"msg": "DB error", "status": "fail"}');
						}	
						else {
							console.log("data inserted to db");
							res.end('{"msg": "Reistered successfully", "status": "success"}');
						}
					});
				}
		}
	});
});

app.post("/logIn", function(req, res) {
	// res.header('Access-Control-Allow-Origin', '*'); // implementation of CORS
	console.log("logIn activated");
    	console.log("Body is: " + req.body);
	var parsedData = JSON.parse(req.body);

	var findQuery = {"Email": parsedData.Email};
	req.db.collection('registeredUsers').findOne(findQuery, function(err, data) {
		if(err) {
			console.log(err);
			res.end('{"msg": "DB error", "status": "fail"}');
		}
		else {
			if(data) { // if existent
				console.log("email found");
				var findQuery2 = {"Email": parsedData.Email, "Password": parsedData.Password};
				req.db.collection('registeredUsers').findOne(findQuery2, function(err, data) {
					if(data) { // if existent
						console.log("log in successfully");
						// res.end('{"msg": "Log in successfully", "status": "success"}');
						res.json(JSON.stringify(data));
					}
					else {
						console.log("wrong password");
						res.end('{"msg": "wrong password", "status": "fail"}');
					}
				});
			}
			else { // if not existent
				console.log("not found email");
				res.end('{"msg": "wrong email", "status": "fail"}');
			}
		}
	});
});

app.get("/getAll", function(req, res) {
	// res.header('Access-Control-Allow-Origin', '*'); // implementation of CORS
	console.log("get activated");
	// console.log(req);
	var UserId = req.query.UserId;
    	console.log("UserId is: " + UserId);
	var query = {"UserInfo.UserId": UserId};
	req.db.collection("allAppData").findOne(query, function(err, item) {
		if(err) console.log("err is: " + err);
		else {
			if(item) {
				console.log("Found data");
				res.json(JSON.stringify(item));
			}
			else {
				console.log("Not found data");
				res.end('{"msg": "Not found data", "status": "fail"}');
			}
		}
		
	});
	
	//var cursor = req.db.collection("allAppData").find(query);
	//cursor.each(function(err, doc) {
	//	if(err) console.log("err is: " + err);
	//	else {
	//		console.log(doc.UserInfo.UserId);
	//		break;
	//	}
	//});
	//res.json(JSON.stringify(cursor[0]));
});

app.listen(8000);

