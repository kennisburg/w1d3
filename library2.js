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
               },

    printPlaylists: function () {
      
      for (var p in this.playlists) {
        console.log(p + ": " + this.playlists[p].name + " - " + (this.playlists[p].tracks).length + " tracks")
      }
    },

    printTracks: function () {
      
      for (var t in this.tracks) {
        console.log(t + ": " + this.tracks[t].name + " by " + this.tracks[t].artist + "(" + this.tracks[t].album + ")")
      }
    },

    printPlaylist: function (playlistId) {
      
      console.log(this.playlists[playlistId].id + ': ' + this.playlists[playlistId].name + ' - ' + (this.playlists[playlistId].tracks).length + ' tracks');
    
      for (var t in this.playlists[playlistId].tracks){
        console.log(this.playlists[playlistId].tracks[t] + ': ' + this.tracks[this.playlists[playlistId].tracks[t]].name + ' by ' + this.tracks[this.playlists[playlistId].tracks[t]].artist + ' (' + this.tracks[this.playlists[playlistId].tracks[t]].album + ')');
      }
    },

    addTrackToPlaylist: function (trackId, playlistId) {
      this.playlists[playlistId].tracks.push(this.tracks[trackId].id);
      this.playlists[playlistId].tracks.sort();
      return this.playlists[playlistId].tracks
    },

    uid: function() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    },

    addTrack: function (name, artist, album) {
      var a = this.uid();
      this.tracks[a] = {};
      this.tracks[a].id = a;
      this.tracks[a].name = name;
      this.tracks[a].artist = artist;
      this.tracks[a].album = album;
    },

    addPlaylist: function (name) {
      var a = this.uid();
      this.playlists[a] = {};
      this.playlists[a].id = a;
      this.playlists[a].name = name;
      this.playlists[a].tracks = [];
    }

};





library.printPlaylists();

console.log('');

library.printTracks();

console.log('');

library.printPlaylist('p02');

console.log('');

library.addTrackToPlaylist('t03', 'p01');
console.log(library.playlists.p01);

console.log('');

library.addTrack('Mr.WorldWide', 'Pitbull', 'Alaska Tour');
console.log(library.tracks);

console.log('');

library.addPlaylist('newest');
console.log(library.playlists);