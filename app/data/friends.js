var faker = require('faker');
var friends = [];
for(i = 0; i < 100; i++){
    //Create 100 friend objects and push them to the friend array
    var newFriend = {
        name: faker.name.findName(),
        image: faker.image.avatar(),
        scores: [
            Math.floor(Math.random()*5) + 1,
            Math.floor(Math.random()*5) + 1,
            Math.floor(Math.random()*5) + 1,
            Math.floor(Math.random()*5) + 1,
            Math.floor(Math.random()*5) + 1,
            Math.floor(Math.random()*5) + 1,
            Math.floor(Math.random()*5) + 1,
            Math.floor(Math.random()*5) + 1,
            Math.floor(Math.random()*5) + 1,
            Math.floor(Math.random()*5) + 1,
        ]
    }   
    friends.push(newFriend);
}



//console.log(friends);
module.exports = friends;