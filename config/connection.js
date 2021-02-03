// Set up MySQL connection.
var mysql = require("mysql");

//THE BELOW CODE SHOULD BE UNCOMMENTED IF YOU CHOOSE TO TEST THE APPLICATION LOCALLY.
// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "password",
//     database: "bucketlist_db"
// });

// for Heroku
var connection = mysql.createConnection(process.env.JAWSDB_URL);

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