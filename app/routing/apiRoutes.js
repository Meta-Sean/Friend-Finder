var path = require('path');
var friends = require('../data/friends.js')
var Joi = require('joi');
//function to export the routes
module.exports = function(app){
  // Displays all tables
  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });
  // Create New People 
app.post("/api/friends", function(req, res) {
  //Joi validation logic
  const schema = {
    name: Joi.string().min(3).required(),
    image: Joi,
    scores: Joi
  };
  //Validation
  var result = Joi.validate(req.body, schema);
  console.log(result);
  //Log Error if error
  if(result.error){
    //400 Bad Request
    res.status(400).send(result.error);
  }
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newPerson = req.body;
    var newScores = newPerson.scores;
    //Create Variables for match name and image
    var match
    var matchName = "";
    var matchImage = "";
    var latestMatchScore = 20;
    //console.log(friends[0].scores);
    //console.log(newScores)
    //Loop through all the friends and find the differences
    for (var i = 0; i < friends.length; i++){
      //Difference variable to store difference between scores
      var difference = 0;
      for(var l = 0; l < newScores.length; l++){
        //Use math.abs for no negative numbers(absolutes);
        difference = difference + Math.abs(friends[i].scores[l] - parseInt(newScores[l]))
      }
      if( difference < latestMatchScore){
        latestMatchScore = difference;
        match = friends[i];
        matchName = friends[i].name;
        matchImage = friends[i].image;
      }
    }
    console.log(matchImage);
    console.log(matchName);
    // Push the new person to the friends list
    friends.push(newPerson);
    res.json(match);
  });

}

