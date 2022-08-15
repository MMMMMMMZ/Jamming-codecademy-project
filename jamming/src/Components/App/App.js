import './App.css';
import SearchBar from './../SearchBar/SearchBar';
import SearchResults from './../SearchResults/SearchResults';
import Playlist from './../Playlist/Playlist';
import React from 'react';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchResults : [{name:"track 1", artist: "artist 1", album: "album 1", id: 1},
      {name:"track 2", artist: "artist 2", album: "album 2", id: 2},
      {name:"track 3", artist: "artist 3", album: "album 3", id: 3}]
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
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
