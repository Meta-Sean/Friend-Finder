// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');
var connection = require('./app/data/connection.js');
// Sets up the Express App
// =============================================================
var app = express();
const port = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


  // Starts the server to begin listening
// =============================================================
app.listen(port,'0.0.0.0', function() {
    console.log("App listening on PORT " + PORT);
  });
  
