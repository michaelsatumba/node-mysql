const http = require('http');
const dt = require('./datemodule');
const url = require('url');
var fs = require('fs');
var uc = require('upper-case');
var events = require('events');
var eventEmitter = new events.EventEmitter();
var formidable = require('formidable');

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

//The fs.appendFile() method appends the specified content at the end of the specified file:
/*
fs.appendFile('demofile1.txt', ' This is my text.', function (err) {
	if (err) throw err;
	console.log('Updated!');
});
*/

// The fs.writeFile() method replaces the specified file and content:
/*
fs.writeFile('demofile1.txt', 'This is my text', function (err) {
	if (err) throw err;
	console.log('Replaced!');
});
*/

// The fs.unlink() method deletes the specified file:
/*
fs.unlink('demofile1.txt', function (err) {
	if (err) throw err;
	console.log('File deleted!');
});
*/

// The fs.rename() method renames the specified file:
/*
fs.rename('myrenamedfile.txt', 'demo.txt', function (err) {
	if (err) throw err;
	console.log('File Renamed!');
});
*/

// Parse an address with the url.parse() method, and it will return a URL object with each part of the address as properties:
/*
var adr = 'http://localhost:8080/default.htm?year=2022&month=september';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.year); //returns '2022'
*/

// read file according to the filename passed in, if error write 404.
/*
http
	.createServer(function (req, res) {
		var q = url.parse(req.url, true);
		var filename = '.' + q.pathname;
		fs.readFile(filename, function (err, data) {
			if (err) {
				res.writeHead(404, { 'Content-Type': 'text/html' });
				return res.end('404 Not Found');
			}
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write(data);
			return res.end();
		});
	})
	.listen(8080);
*/

// adding a module from 'upper-case' and including it in this file and using it
/*
http
	.createServer(function (req, res) {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write(uc.upperCase('Hello World!'));
		// res.write('Hello World!'.toUpperCase()); // works too
		// res.write('Hello World!');
		res.end();
	})
	.listen(8080);
*/

// to see if file exists?
/*
var rs = fs.createReadStream('./styles.css');
rs.on('open', function () {
	// console.log(rs);
	console.log('The file is open');
});
*/

// events
/*
//Create an event handler:
var myEventHandler = function () {
	console.log('I hear a scream!');
};

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('screm');
*/
