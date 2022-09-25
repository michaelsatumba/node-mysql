var http = require('http');
var dt = require('./datemodule');
var url = require('url');
var fs = require('fs');
var mysql = require('mysql');

var express = require('express');
const path = require('path');
var app = express();
const router = express.Router();

router.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/mynewfile1.html'));
});

app.get('/styles.css', function (req, res) {
	res.sendFile(__dirname + '/' + 'styles.css');
});

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '123',
});

let sqlRes = 'nothing';
con.connect(function (err) {
	if (err) throw err;
	console.log('Connected!');
	con.query(`SELECT * FROM sakila.actor LIMIT 100`, function (err, res) {
		if (err) throw err;
		sqlRes = res;
		// console.log(sqlRes);
		console.log(
			sqlRes.map(function (element) {
				return (
					'<p>' +
					element.actor_id +
					' ' +
					element.first_name +
					' ' +
					element.last_name +
					' ' +
					element.last_update.getFullYear() +
					'</p>'
				);
			})
		);
		// console.log(res[0].first_name); // woo!
		fs.writeFile(
			'mynewfile1.html',
			`
			<!DOCTYPE html>
			<html>
			<head>
  <link rel="stylesheet" type="text/css" href="./styles.css">
</head>
        <body>
        <h1 style="color:blue;">Actors in 2006</h1>
        <div>
        ${sqlRes
					.map(function (element) {
						return (
							'<p>' +
							element.actor_id +
							' ' +
							element.first_name +
							' ' +
							element.last_name +
							' ' +
							'</p>'
						);
					})
					.join('')}
        <div>
        </body>
        </html>`,
			function (err) {
				if (err) throw err;
				console.log('Updated!');
			}
		);
	});
});

app.use('/', router);
app.listen(3000);
