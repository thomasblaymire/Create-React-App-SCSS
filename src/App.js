import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import MusicFinder from './containers/MusicFinder/MusicFinder';
import MusicItem from './containers/MusicItem/MusicItem';
import Utility from './hoc/Utility/Utility';

class App extends Component {
  render() {
    return (
      <Utility>
        <div className="App">
        <Switch> 
          <Route path="/" exact component={MusicFinder}></Route>
          <Route path="/events/:id" component={MusicItem}></Route>
        </Switch>


        
        </div>
      </Utility>
    );
  }
}

export default App;