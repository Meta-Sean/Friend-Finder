var mysql = require("mysql");
// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "friend_finder_db"
  });
  

  //EXPORT CONNECTION FOR EXPRESS SERVER.JS to use

  module.exports = connection;