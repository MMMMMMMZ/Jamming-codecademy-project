import './App.css';
import SearchBar from './../SearchBar/SearchBar';
import SearchResults from './../SearchResults/SearchResults';
import Playlist from './../Playlist/Playlist';
import React from 'react';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchResults : [
        {name:"track 1", artist: "artist 1", album: "album 1", id: 1},
        {name:"track 2", artist: "artist 2", album: "album 2", id: 2},
        {name:"track 3", artist: "artist 3", album: "album 3", id: 3}
      ],

      playlistName: "My Playlist",

      playlistTracks: [
        {name:"playlist track 1", artist: "playlist artist 1", album: "playlist album 1", id: 6},
        {name:"playlist track 2", artist: "playlist artist 2", album: "playlist album 2", id: 9},
        {name:"playlist track 3", artist: "playlist artist 3", album: "playlist album 3", id: 11}
      ]

    }
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults = {this.state.searchResults}/>
            <Playlist playlistName = {this.state.playlistName} playlistTracks = {this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
