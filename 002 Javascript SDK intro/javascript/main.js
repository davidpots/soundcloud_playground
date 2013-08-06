SC.initialize({
  client_id: '4a01792d7496116664999da099ce9b6f'
});

// "get hottest" -- taken from http://connect.soundcloud.com/examples/basic.html
$(document).on("click", "#getHottest", function(){
  SC.get("/tracks", {limit: 1}, function(tracks){
    var track = tracks[0];
    SC.oEmbed(track.uri, document.getElementById("track"));
  });
  return false;
});

// get latest track from specific user
$(document).on("click", "#getLatestTrackFromUser", function(){
  SC.get("/users/33501864/tracks", {limit: 1}, function(tracks){
    var track = tracks[0];
    SC.oEmbed(track.uri, document.getElementById("track"));
  });
  return false;
});

// get track via URL
$(document).on("click", "#getTrackFromURL", function(){
  var track_url = 'https://soundcloud.com/davidpots/hotel-hell';
  SC.oEmbed(track_url, { auto_play: true }, document.getElementById("track"));
});


// This is unused, but I want to keep it here in case heplful later. This is taken from this example: http://www.youtube.com/watch?v=8TuqjGxosrc
//
//
// function playSomeSound(genre) {
//   SC.get('/tracks', {
//     genres: genre,
//     bpm: {
//       from: 100
//     }
//   }, function(tracks) {
//     var random = Math.floor(Math.random() * 49);
//     SC.oEmbed(tracks[random].uri, { auto_play: true }, document.getElementById('target'));
//   });
// }
// 
// window.onload = function () {
//   SC.initialize({
//     client_id: '4a01792d7496116664999da099ce9b6f'
//   });
//   
//   var menuLinks = document.getElementsByClassName('genre');
//   for (var i = 0; i < menuLinks.length; i++) {
//     var menuLink = menuLinks[i];
//     menuLink.onclick = function(e) {
//       e.preventDefault();
//       playSomeSound(menuLink.innerHTML);
//     };
//   }
// };
