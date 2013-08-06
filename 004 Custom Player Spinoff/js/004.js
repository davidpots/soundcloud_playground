
function playSomeMusic(myGenre) {

  SC.initialize({
    client_id: '4a01792d7496116664999da099ce9b6f'
  });


  SC.get('/tracks', { genres: myGenre, bpm: { from: 120 } },
    function(tracks) {
      //FIRST soundcloud sends back an array of 50 objects (0~49)
      //so let's randomize which one we play:
        //this logic returns a number between 0 and 50
        var random = Math.floor(Math.random() * 49);
        var track_url = tracks[random].permalink_url;
        //LAST let's use the oEmbed method to display the soundplayer
        //in the element #target with a options such as auto play
        SC.oEmbed(track_url, {auto_play: true, color: "ff0066"},
          document.getElementById("target"));
        }
  );
}

// Play by genre, via HTML class
$(document).ready(function(){
  $('.genre').click(function(){
    var genre = $(this).text();
    playSomeMusic(genre)
    return false;
  });
});

// Play random song from a predefined set / playlist

function playSet() {
  SC.initialize({
    client_id: '4a01792d7496116664999da099ce9b6f'
  });

  SC.get('/playlists/8587894', {limit: 1},
    function(tracks) {
      SC.oEmbed(tracks.permalink_url, document.getElementById("target"));
    });
}






// Attempt to hard-wire songs via passing JSON id
$(document).ready(function(){
  $('.remote-song').click(function(){
    var track_id = $(this).data("song-id");
    $('li[data-song-id='+track_id+'] a').click();
    return false
  });
});

