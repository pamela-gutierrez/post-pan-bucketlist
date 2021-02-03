// Set up MySQL connection.
var mysql = require("mysql");


// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   connection = mysql.createConnection({
//     host: “localhost”,
//     port: 3306,
//     user: “root”,
//     password: “password”,
//     database: “burgers_db”
//   });
// }





// // for local testing
// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "password",
//     database: "bucketlist_db"
// });

// for Heroku
var connection = mysql.createConnection(process.env.JAWSDB_URL);


const connection = mysql.createConnection({
    host: process.env.host || 'localhost',
    port: 3306,
    user: process.env.user || 'root',
    // NOTE: Be sure to add your MySQL password here! we defaulted to : password
    password: process.env.password || 'password',
    database: process.env.db || 'bucketlist_db',
});




// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;