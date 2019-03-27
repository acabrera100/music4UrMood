import React, { Component } from 'react';

import './css/App.css';
import { Switch, Route } from 'react-router-dom';
import NavbarHoriz from './components/NavbarHoriz';
import Home from './components/Home'
import YourMoods from './components/YourMoods'
import PlaySong from './playSong'


class App extends Component {
  render() {
    return (
      <div className="App">

        <NavbarHoriz />
        <Switch>
          <Route exact path="/" render={ (props) => <Home {...props} /> } />
          <Route path="/yourMoods" render={ (props) => <YourMoods {...props} /> } />
        </Switch>


        <PlaySong/>
      </div>
    )
  }
}

export default App;
