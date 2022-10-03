var mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 5050;

// Start by creating a connection to the database.

// Use the username and password from your MySQL database.
var con = mysql.createConnection({
//   host: "localhost",
//   user: "yourusername",
//   password: "yourpassword"
host: `${process.env.HOST}`,
user: `${process.env.USER}`,
password: `${process.env.PASSWORD}`,
database: `${process.env.DATABASE}`,
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// Use SQL statements to read from (or write to) a MySQL database. This is also called "to query" the database.

// The connection object created in the example above, has a method for querying the database:

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query('SELECT 1 + 1 AS solution', function (err, result) {
      if (err) throw err;
    //   console.log("Result: " + result);
      console.log('The solution is: ', result[0].solution);
    });
  });