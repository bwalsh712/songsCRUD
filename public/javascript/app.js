//songs app
var songs = [];

var Song =  function(title, artist, genre) {
  this.title = title;
  this.artist = artist;
  this.genre =  genre;
}

var wonderwall = new Song('Wonderwall', 'Oasis', 'Popishthing');
var stairway = new Song('Stairway to Heaven', 'Led Zeppelin', 'Classic Rock')
var toxic = new Song('Toxic', 'Britney Spears', 'Pop')
songs.push(wonderwall, stairway, toxic);

function displaySongs() {
  var elemString = "";
  for(var i = 0; i < songs.length; i++) {
    elemString += getElemString(songs[i], i);
  }
  document.getElementById('songs').innerHTML = elemString;
}
displaySongs();

document.getElementById('newSongForm').addEventListener('submit', function(event){
  event.preventDefault();
  var title = document.getElementById("songTitle").value;
  var artist = document.getElementById("songArtist").value;
  var genre = document.getElementById("songGenre").value;
//create the mysong obj by calling the Song constructor

  var mySong = new Song(title, artist, genre);

// add the created song into the array

  songs.push(mySong);

//appned the new song to thr end of the list already on the index page

  document.getElementById('songs').innerHTML += getElemString(mySong, songs.length - 1);


    document.getElementById('songTitle').value = "";
    document.getElementById('songArtist').value = "";
    document.getElementById('songGenre').value = "";
});

function getElemString(song, z) {
  return '<div class="well container">'
  + '<h3>' + song.title + '</h3>'
  + '<p>artist: <i>' + song.artist + '</i></p></br>'
  + '<p>genre: <i>' + song.genre + '</i></p></br>'
  + '<div>'
    + '<button class="btn btn-primary" onclick="editSong('+z+')">Edit</button>'
    + '<button class="btn btn-danger" onclick="deleteSong('+z+')">Delete</button>'
  + '</div>'
  + '</div>';
}
function editSong(index) {
  $('#editTitle').val(songs[index].title);
  $('#editArtist').val(songs[index].artist);
  $('#editGenre').val(songs[index].genre);
  $('#saveEditButton').html('<button type="button" onclick="saveChanges('+index+')" class="btn btn-primary">Save changes</button>');

  $('#myModal').modal('toggle');

}

function saveChanges(index) {
  var title = $('#editTitle').val();
  var artist = $('#editArtist').val();
  var genre = $('#editGenre').val();


  songs[index] = new Song(title, artist, genre);

  $('#editTitle').val('');
  $('#editArtist').val('');
  $('#editGenre').val('');

  $('#myModal').modal('toggle');
  displaySongs();
}

function deleteSong(a) {
  songs.splice(a, 1);
  displaySongs();
}
