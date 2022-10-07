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
//     console.log("Connected!"); //
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
//     //   console.log(result.length) // length
//     //   console.log(result[0].name);
//     //   console.log(fields);
//     //   console.log(result.map(e => e.name + ' ' +  e.address + ' ' + e.id)) // map!
//     });
//   });

// To select only some of the columns in a table, use the "SELECT" statement followed by the column name.

// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT name, address FROM customers", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });

  // As you can see from the result of the example above, the result object is an array containing each row as an object.

// To return e.g. the address of the third record, just refer to the third array object's address property:

// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT name, address FROM customers", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result[2].address); // print address of third element
//     });
//   });

// The third parameter of the callback function is an array containing information about each field in the result.

// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT name, address FROM customers", function (err, result, fields) {
//       if (err) throw err;
//       console.log(fields);
//       console.log(fields[1].name) // field name
//     });
//   });

// When selecting records from a table, you can filter the selection by using the "WHERE" statement:

// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });

// You can also select the records that starts, includes, or ends with a given letter or phrase.

// Use the '%' wildcard to represent zero, one or multiple characters:

// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (err, result) { // where address starts with an 'S'
//       if (err) throw err;
//       console.log(result);
//     });
//   });

// When query values are variables provided by the user, you should escape the values.

// This is to prevent SQL injections, which is a common web hacking technique to destroy or misuse your database.

// The MySQL module has methods to escape query values:

// var adr = 'Mountain 21';
// var adr1 = 'Park Lane 38'
// var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr1);
// con.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });

// You can also use a ? as a placeholder for the values you want to escape.

// In this case, the variable is sent as the second parameter in the query() method:
// var adr = 'Mountain 21';
// var sql = 'SELECT * FROM customers WHERE address = ?';
// con.query(sql, [adr], function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });

// If you have multiple placeholders, the array contains multiple values, in that order:

// var name = 'Amy';
// var adr = 'Mountain 21';
// var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
// con.query(sql, [name, adr], function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });

// Use the ORDER BY statement to sort the result in ascending or descending order.

// The ORDER BY keyword sorts the result ascending by default. To sort the result in descending order, use the DESC keyword.

// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM customers ORDER BY address DESC", function (err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });

// You can delete records from an existing table by using the "DELETE FROM" statement:

// con.connect(function(err) {
//     if (err) throw err;
//     var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Number of records deleted: " + result.affectedRows);
//     });
//   });

// con.connect(function(err) {
//     if (err) throw err;
//     var sql = "DELETE FROM customers WHERE address = address";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Number of records deleted: " + result.affectedRows);
//     //   console.log(result)
//     });
//   });

// COUNT
// con.connect(function(err) {
//         if (err) throw err;
//         con.query("SELECT COUNT(*) FROM customers", function (err, result, fields) {
//           if (err) throw err;
//           console.log(result)
//         });
//       });

// Delete duplicates // idk
con.connect(function(err) {
        if (err) throw err;
        // (SELECT id FROM customers GROUP BY id HAVING (COUNT(id) > 1))
        // con.query("DELETE FROM customers WHERE id IN (SELECT *, COUNT(*) FROM customers GROUP BY name HAVING COUNT (*) > 1)", function (err, result, fields) {
        //   if (err) throw err;
        // //   console.log(result)
        // });
        //  con.query("SELECT *, COUNT(*) FROM customers GROUP BY name HAVING COUNT (*) > 1", function (err, result, fields) {
        //     if (err) throw err;
        //     console.log(result)
        //   });
        //  con.query("DELETE FROM customers WHERE name = name", function (err, result, fields) {
        //   if (err) throw err;
        // //   console.log(result)
        // });
        // var sql = "INSERT INTO customers (name, address) VALUES ?";
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
        // con.query("SELECT * FROM customers ORDER BY name", function (err, result, fields) {
        //     if (err) throw err;
        //     console.log(result)
        //   });
        // con.query("CREATE TABLE customers2 AS SELECT *, COUNT(*) FROM customers GROUP BY name HAVING COUNT (*) > 0", function (err, result, fields) {
        //     if (err) throw err;
        //     // console.log(result)
        //   });
        //  con.query("SELECT * FROM customers2 ORDER BY name", function (err, result, fields) { // works! - create new table and only insert items where is more than 0
        //     if (err) throw err;
        //     console.log(result)
        //   });
      });