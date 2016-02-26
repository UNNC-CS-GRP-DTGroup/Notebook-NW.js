//var str2 = { "name": "cxh", "sex": "man" };
//
//delete str2.name;
//
//alert(str2.name);

//var fso, f1;
//fso = new ActiveXObject("Scripting.FileSystemObject");
//f1 = fso.CreateTextFile("/Users/Erin/Desktop/test.txt", true);

// node.js
//var fs = require('fs');
//
//var filename = "test.txt";
//var content = "test content"
////创建文件
//fs.appendFile(filename, content, 
//		function(err){
//			if (!err)
//			{
//				console.log('----------- Wrote header to ' + filename);		
//			}
//			else
//			{
//				throw err;
//			}
//		});


// localsotrage
//localStorage.lastname="Smith";
//alert(localStorage.lastname);

//localforage
var key = "notecontent";
var value = "value2"
var noteContentJson = {"NoteId":"56a831ae03f3314265000003","UserId":"56a82c7bab64417776002a5c","IsBlog":false,"Content":"\u003cp\u003edededede\u003c/p\u003e\u003cp\u003e\u003cbr data-mce-bogus=\"1\"\u003e\u003c/p\u003e\u003cp\u003ededede\u003c/p\u003e\u003cp\u003e\u003cbr data-mce-bogus=\"1\"\u003e\u003c/p\u003e\u003cp\u003eedededed\u003c/p\u003e\u003cp\u003e\u003cbr data-mce-bogus=\"1\"\u003e\u003c/p\u003e","Abstract":"\u003cp\u003edededede\u003c/p\u003e\u003cp\u003e\u003cbr data-mce-bogus=\"1\"\u003e\u003c/p\u003e\u003cp\u003ededede\u003c/p\u003e\u003cp\u003e\u003cbr data-mce-bogus=\"1\"\u003e\u003c/p\u003e\u003cp\u003eedededed\u003c/p\u003e\u003cp\u003e\u003cbr data-mce-bogus=\"1\"\u003e\u003c/p\u003e","CreatedTime":"2016-01-27T10:55:38.66+08:00","UpdatedTime":"2016-01-27T17:40:20+08:00","UpdatedUserId":"56a82c7bab64417776002a5c"};

localforage.setItem(key, noteContentJson, function(err, value) {
    // Do other things once the value has been saved.
    alert("set: done");
    localforage.getItem(key, function(err, value) {
        // Run this code once the value has been
        // loaded from the offline store.
        alert("get: " + value.Content);
    });
});