
// Link in keys file
var myKeys = require("./keys.js");
// Create a variable for my commands
var liriCommand = process.argv[2]

getTweets();









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

