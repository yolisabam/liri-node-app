// Link in keys file
var myKeys = require("./keys.js");
// Create a variable for my commands
var fs = require('fs');

var request = require("request");

var Twitter = require("twitter");

var Spotify = require("node-spotify-api");

var liriCommand = process.argv[2];

var userInputArray = process.argv.slice(3);

var userInput = userInputArray.join("+"); 

var file = "random.txt"

// need to set this equal to an array so I can take more arguments

// set the variable var songSearch which will take userInput array and put it into 1 string that will search songs on spotify 



userCommands(liriCommand, userInput);

function getMovies() {

  // Then run a request to the OMDB API with the movie specified
  request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=40e9cece", function(error, response, body) {

    // If the request is successful (i.e. if the response status code is 200)
    if (!error && response.statusCode === 200) {

      // Parse the body of the site and recover just the imdbRating
      // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
      console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
    }
  });

}




function doWhatItSays(){
  fs.readFile(file, "utf8", function(error, data) {
  // If the code experiences any errors it will log the error to the console.
    if (error) {
              console.log(error);
             console.log("I'm at the error"); 
    } else {
      // console.log(data);
      userInput = data.split(",")[1];
      command = data.split(",")[0]
      userCommands(command, userInput);
    }
  });
}
  








function getTweets(){
  // Link in twitter node package
  var client = new Twitter(myKeys.twitterKeys);
  // console.log(myKeys.twitterKeys);
  var params = {screen_name: "kimkardashian"};
    client.get("statuses/user_timeline", params, function(error, tweets, response){
      if(!error) {
        for (var i=0; i<20; i++){
          // console.log(tweets[i])
          console.log(tweets[i].text);
          console.log(tweets[i].created_at);      
          console.log('******************************************');
        }
      } 
    });
}


// To complete: add a statement that accounts 

function getSongs (){
  var Spotify = require('node-spotify-api');
  var spotify = new Spotify({
  id: '463ee2bca68543128211c8b961e6c252',
  secret: '2731f6c183114f4dbc6d003ce2b067ae'  
  });
    spotify.search({ type: 'track', query: userInput }, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      console.log("***************************************");
      console.log("Artist(s): " + data.tracks.items[0].album.artists[0].name); 
      console.log("***************************************");
      console.log("Song: " + data.tracks.items[0].name);
      console.log("***************************************");
      console.log("Preview Link: " + data.tracks.items[0].preview_url);
      console.log("***************************************");
      console.log("Album Name: " + data.tracks.items[0].album.name);
      console.log("***************************************");

    });
} 


function userCommands(liriCommand, input) {
  if (liriCommand === "my-tweets"){
    getTweets();
  } else if(liriCommand === "spotify-this-song"){
    getSongs();
  } else if(liriCommand === "do-what-it-says"){
    doWhatItSays();
  }

} 
