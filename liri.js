//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
require("dotenv").config();
var keys = require("./keys");
var cmdArgs = process.argv;
var command = cmdArgs[2];
var query = cmdArgs[3];
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Twitter    Twitter    Twitter    Twitter    Twitter    Twitter
// Twitter    Twitter    Twitter    Twitter    Twitter    Twitter
// Twitter    Twitter    Twitter    Twitter    Twitter    Twitter
// Twitter    Twitter    Twitter    Twitter    Twitter    Twitter
// Twitter    Twitter    Twitter    Twitter    Twitter    Twitter
// Twitter    Twitter    Twitter    Twitter    Twitter    Twitter

var Twitter = require("twitter");
var twit = keys.twitter;
var client = new Twitter(twit);

function getTweets() {
  var params = {
    q: "akshay",
    screen_name: "jwhittington92",
    count: 20,
    include_entities: false,
    trim_user: 1
  };

  client.get("statuses/user_timeline", params, function(
    error,
    tweets,
    response
  ) {
    if (error) {
      console.log("Error occurred: " + error);
    } else {
      console.log("My 20 Most Recent Tweets");
      console.log("");

      for (var i = 0; i < tweets.length; i++) {
        console.log("( #" + (i + 1) + " )  " + tweets[i].text);
        console.log("Created:  " + tweets[i].created_at);
        console.log("");
      }
    }
  });
}

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Spotify  Spotify  Spotify  Spotify  Spotify  Spotify  Spotify  Spotify
// Spotify  Spotify  Spotify  Spotify  Spotify  Spotify  Spotify  Spotify
// Spotify  Spotify  Spotify  Spotify  Spotify  Spotify  Spotify  Spotify
// Spotify  Spotify  Spotify  Spotify  Spotify  Spotify  Spotify  Spotify
// Spotify  Spotify  Spotify  Spotify  Spotify  Spotify  Spotify  Spotify
// Spotify  Spotify  Spotify  Spotify  Spotify  Spotify  Spotify  Spotify

var Spotify = require("node-spotify-api");
var spot = keys.spotify;
var spotify = new Spotify(spot);

var spotifyThis = function(trackQuery) {
  if (trackQuery === undefined) {
    trackQuery = "the sign ace of base";
  }

  spotify.search({ type: "track", query: trackQuery}, function(error, data) {
    if (error) {
      console.log("Error occurred: " + error);
    } else {
      for (var i = 0; i < data.tracks.items[0].artists.length; i++) {
        if (i === 0) {
          console.log("Artist(s):    " + data.tracks.items[0].artists[i].name);
        } else {
          console.log("              " + data.tracks.items[0].artists[i].name);
        }
      }
      console.log("Song:         " + data.tracks.items[0].name);
      console.log("Preview Link: " + data.tracks.items[0].preview_url);
      console.log("Album:        " + data.tracks.items[0].album.name);
    }
  });
};

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// OMDB    OMDB    OMDB    OMDB    OMDB    OMDB    OMDB    OMDB    OMDB    
// OMDB    OMDB    OMDB    OMDB    OMDB    OMDB    OMDB    OMDB    OMDB    
// OMDB    OMDB    OMDB    OMDB    OMDB    OMDB    OMDB    OMDB    OMDB    
// OMDB    OMDB    OMDB    OMDB    OMDB    OMDB    OMDB    OMDB    OMDB 
// OMDB    OMDB    OMDB    OMDB    OMDB    OMDB    OMDB    OMDB    OMDB    
// OMDB    OMDB    OMDB    OMDB    OMDB    OMDB    OMDB    OMDB    OMDB 

var request = require('request');








//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// liri Input    liri Input    liri Input    liri Input    liri Input    
// liri Input    liri Input    liri Input    liri Input    liri Input    
// liri Input    liri Input    liri Input    liri Input    liri Input    
// liri Input    liri Input    liri Input    liri Input    liri Input    
// liri Input    liri Input    liri Input    liri Input    liri Input    
// liri Input    liri Input    liri Input    liri Input    liri Input    

if (command === "my-tweets") {
  getTweets();
} else if (command == "spotify-this-song") {
  spotifyThis(query);
}

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
