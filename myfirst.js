const http = require('http');
const dt = require('./datemodule');
const url = require('url');
var fs = require('fs');

/*
http
	.createServer(function (req, res) {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end('Hello World!');
	})
	.listen(8080);
*/

// can use modules like dt in file
/* 
http
	.createServer(function (req, res) {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write('The date and time are currently: ' + dt.myDateTime());
		res.end();
	})
	.listen(8080);
*/

// makes server
/*
//create a server object:
http
	.createServer(function (req, res) {
		res.write('Hello World!'); //write a response to the client
		res.end(); //end the response
	})
	.listen(8080); //the server object listens on port 8080
*/

// writes the request url which is /
/* 
http
	.createServer(function (req, res) {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write(req.url);
		res.end();
	})
	.listen(8080);
*/

// gets the req from url address like this:
// http://localhost:8080/?year=2022&month=september
// 2022 september
/*
http
	.createServer(function (req, res) {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		var q = url.parse(req.url, true).query;
		var txt = q.year + ' ' + q.month;
		res.end(txt);
	})
	.listen(8080);
*/

// renders demofile.html
// does code matter inside writeHead()
/*
http
	.createServer(function (req, res) {
		fs.readFile('demofile.html', function (err, data) {
			res.writeHead(500, { 'Content-Type': 'text/html' });
			res.write(data);
			return res.end('the end');
		});
	})
	.listen(8080);
*/

// The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:
/*
fs.appendFile('demofile1.txt', 'Hello content!', function (err) {
	if (err) throw err;
	console.log('Saved!');
});
*/

// The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created:
/*
fs.open('demofile3.txt', 'w+', function (err, file) {
	if (err) throw err;
	console.log('Saved!');
});
*/

// The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:
/*
fs.writeFile('demofile3.txt', 'Hello content!', function (err) {
	if (err) throw err;
	console.log('Saved!');
});
*/
