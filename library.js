var library = {
    tracks: { t01: { id: "t01",
                     name: "Code Monkey",
                     artist: "Jonathan Coulton",
                     album: "Thing a Week Three" },
              t02: { id: "t02",
                     name: "Model View Controller",
                     artist: "James Dempsey",
                     album: "WWDC 2003"},
              t03: { id: "t03",
                     name: "Four Thirty-Three",
                     artist: "John Cage",
                     album: "Woodstock 1952"}
            },
    playlists: { p01: { id: "p01",
                        name: "Coding Music",
                        tracks: ["t01", "t02"]
                      },
                 p02: { id: "p02",
                        name: "Other Playlist",
                        tracks: ["t03"]
                      }
               }
  }
  

  
  var printPlaylists = function () {
    
    for (var p in library.playlists) {
      console.log(p + ": " + library.playlists[p].name + " - " + (library.playlists[p].tracks).length + " tracks")
    }
  }
  
  

  
  var printTracks = function () {
    
    for (var t in library.tracks) {
      console.log(t + ": " + library.tracks[t].name + " by " + library.tracks[t].artist + "(" + library.tracks[t].album + ")")
    }
  }
  
  

  
  var printPlaylist = function (playlistId) {
    
    console.log(library.playlists[playlistId].id + ': ' + library.playlists[playlistId].name + ' - ' + (library.playlists[playlistId].tracks).length + ' tracks');
  
    for (var t in library.playlists[playlistId].tracks){
      console.log(library.playlists[playlistId].tracks[t] + ': ' + library.tracks[library.playlists[playlistId].tracks[t]].name + ' by ' + library.tracks[library.playlists[playlistId].tracks[t]].artist + ' (' + library.tracks[library.playlists[playlistId].tracks[t]].album + ')');
    }
  }
  
  
 
  
  var addTrackToPlaylist = function (trackId, playlistId) {
    library.playlists[playlistId].tracks.push(library.tracks[trackId].id);
    library.playlists[playlistId].tracks.sort();
    return library.playlists[playlistId].tracks
  }
  
  
  
  
  var uid = function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  
  
  
  
  var addTrack = function (name, artist, album) {
    var a = uid();
    library.tracks[a] = {};
    library.tracks[a].id = a;
    library.tracks[a].name = name;
    library.tracks[a].artist = artist;
    library.tracks[a].album = album;
  }
  
  
  
  
  var addPlaylist = function (name) {
    var a = uid();
    library.playlists[a] = {};
    library.playlists[a].id = a;
    library.playlists[a].name = name;
    library.playlists[a].tracks = [];
  }