const http = require('http');
const dt = require('./datemodule');
const url = require('url');
const fs = require('fs');
const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
const PORT = process.env.PORT || 5050;

router.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/mynewfile1.html'));
});

app.get('/styles.css', function (req, res) {
	res.sendFile(__dirname + '/' + 'styles.css');
});

const con = mysql.createConnection({
	// host: 'localhost',
	// user: 'root',
	// password: '123',
	host: `${process.env.HOST}`,
	user: `${process.env.USER}`,
	password: `${process.env.PASSWORD}`,
	database: `${process.env.DATABASE}`,
});

con.connect();

con.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
	if (error) throw error;
	console.log('The solution is: ', results[0].solution);
});

/*
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
*/

app.use('/', router);
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
