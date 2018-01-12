import React, { Component } from 'react';

import './App.scss';
import MusicFinder from './containers/MusicFinder/MusicFinder';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MusicFinder />
      </div>
    );
  }
}

export default App;
