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

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query('SELECT 1 + 1 AS solution', function (err, result) {
//       if (err) throw err;
//     //   console.log("Result: " + result);
//       console.log('The solution is: ', result[0].solution);
//     });
//   });

// Create a database named "mydb":

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query("CREATE DATABASE mydb", function (err, result) {
//       if (err) throw err;
//       console.log("Database created");
//     });
//   });

// Create a table named "customers":

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });
//   });
  

// When creating a table, you should also create a column with a unique key for each record.

// This can be done by defining a column as "INT AUTO_INCREMENT PRIMARY KEY" which will insert a unique number for each record. Starting at 1, and increased by one for each record.

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table altered");
//     });
//   });

// To fill a table in MySQL, use the "INSERT INTO" statement.

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "INSERT INTO customers (name, address) VALUES ('Apple Inc', 'Highway 66')";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("1 record inserted");
//     });
//   });

// To insert more than one record, make an array containing the values, and insert a question mark in the sql, which will be replaced by the value array:
// INSERT INTO customers (name, address) VALUES ?

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "INSERT INTO customers (name, address) VALUES ?";
//     var values = [
//       ['John', 'Highway 71'],
//       ['Peter', 'Lowstreet 4'],
//       ['Amy', 'Apple st 652'],
//       ['Hannah', 'Mountain 21'],
//       ['Michael', 'Valley 345'],
//       ['Sandy', 'Ocean blvd 2'],
//       ['Betty', 'Green Grass 1'],
//       ['Richard', 'Sky st 331'],
//       ['Susan', 'One way 98'],
//       ['Vicky', 'Yellow Garden 2'],
//       ['Ben', 'Park Lane 38'],
//       ['William', 'Central st 954'],
//       ['Chuck', 'Main Road 989'],
//       ['Viola', 'Sideway 1633']
//     ];
//     con.query(sql, [values], function (err, result) {
//       if (err) throw err;
//       console.log("Number of records inserted: " + result.affectedRows);
//     });
//   });

// For tables with an auto increment id field, you can get the id of the row you just inserted by asking the result object.
// Note: To be able to get the inserted id, only one row can be inserted.

// con.connect(function(err) {
//     if (err) throw err;
//     var sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("1 record inserted, ID: " + result.insertId);
//     });
//   });

// To select data from a table in MySQL, use the "SELECT" statement.

// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM customers", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result)
//       console.log(result[0].name);
//       console.log(fields);
//       console.log(result.map(e => e.name + ' ' +  e.address + ' ' + e.id)) // map!
//     });
//   });