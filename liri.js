
// Link in keys file
var myKeys = require("./keys.js");
// Create a variable for my commands
var liriCommand = process.argv[2];
var userInput = process.argv[3]; 


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
          console.log(tweets[i].text);
          console.log(tweets[i].created_at);      
          console.log('******************************************');
        }
      } 
    })
  }
}

function getSongs (){
  var Spotify = require('node-spotify-api');
  var spotify = new Spotify ({
    id:myKeys.spotifyKeys.client_id, 
    secret:myKeys.spotifyKeys.client_secret
  });

  if(liriCommand === "spotify-this-song"){
    spotify.search({type:'track', query: 'despacito'}, function(err,data){
      if(err) {
        return console.log('Error occurred: ' + err);
      }
    console.log(data)  
    })
  }
}   
