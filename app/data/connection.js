var mysql = require("mysql");
// MySQL DB Connection Information 
var connection;

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "friend_finder_db"
  });

}

  
  //EXPORT CONNECTION FOR EXPRESS SERVER.JS to use
  connection.connect();
  module.exports = connection;