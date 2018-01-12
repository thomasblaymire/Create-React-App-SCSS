import React, { Component } from 'react';

import './App.scss';
import MusicFinder from './containers/MusicFinder/MusicFinder';
import Utility from './hoc/Utility/Utility';

class App extends Component {
  render() {
    return (
      <Utility>
      <div className="App">
        <MusicFinder />
      </div>
      </Utility>
    );
  }
}

export default App;
