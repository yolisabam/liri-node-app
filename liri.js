
// Link in keys file
var myKeys = require("./keys.js");
// Create a variable for my commands
var liriCommand = process.argv[2];

var userInput = process.argv[3]; // need to set this equal to an array so I can take more arguments

// set the variable var songSearch which will take userInput array and put it into 1 string that will search songs on spotify 


getTweets();

getSongs();






function getTweets(){
  // Link in twitter node package
  var Twitter = require("twitter");
  var client = new Twitter(myKeys.twitterKeys);
  // console.log(myKeys.twitterKeys);
  var params = {screen_name: "kimkardashian"};
  if (liriCommand === "my-tweets"){
    client.get("statuses/user_timeline", params, function(error, tweets, response){
      if(!error) {
        for (var i=0; i<20; i++){
          // console.log(tweets[i])
          console.log(tweets[i].text);
          console.log(tweets[i].created_at);      
          console.log('******************************************');
        }
      } 
    })
  }
}


// To complete: add a statement that accounts 

function getSongs (){
  var Spotify = require('node-spotify-api');
  var spotify = new Spotify({
  id: '463ee2bca68543128211c8b961e6c252',
  secret: '2731f6c183114f4dbc6d003ce2b067ae'  
  });
  if(liriCommand === "spotify-this-song"){
    spotify.search({ type: 'track', query: userInput }, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      console.log("***************************************");
      console.log("Artist(s): " + data.tracks.items[0].album.artists[0].name); 
      console.log("***************************************");
      console.log("Song: " + data.tracks.items[0].name);
      console.log("***************************************")
      console.log("Preview Link: " + data.tracks.items[0].preview_url);
      console.log("***************************************")
      console.log("Album Name: " + data.tracks.items[0].album.name);
      console.log("***************************************");

    });
  // } else if(liriCommand === "spotify-this-song" && userInput === ""){
  //     spotify.search({ type: 'track', query: "The Sign" }, function(err, data) {
  //       if (err) {
  //         return console.log('Error occurred: ' + err);
  //       }
  //       console.log("***************************************");
  //       console.log("Artist(s): " + data.tracks.items[0].album.artists[0].name); 
  //       console.log("***************************************");
  //       console.log("Song: " + data.tracks.items[0].name);
  //       console.log("***************************************")
  //       console.log("Preview Link: " + data.tracks.items[0].preview_url);
  //       console.log("***************************************")
  //       console.log("Album Name: " + data.tracks.items[0].album.name);
  //       console.log("***************************************");

  //     });
  }
}   
