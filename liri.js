
// Link in keys file
var myKeys = require("./keys.js");
// Link in twitter node package
var twitter = require("twitter");
// Link in twitter keys
var client = new twitter(myKeys.twitterKeys);
// console.log(myKeys.twitterKeys);

var params = {screen_name: "yolisabam"};

client.get("statuses/user_timeline", params, function(error, tweets, response){
  if(!error) {
    for (var i=0; i<21; i++){
      console.log(tweets[i].text);
      console.log(tweets[i].created_at);      
      console.log('******************************************');
    }
  } 
})

