//     _         _
//    / \  _   _| |__   __ _ _ __ ___
//   / _ \| | | | '_ \ / _` | '_ ` _ \
//  / ___ \ |_| | | | | (_| | | | | | |
// /_/   \_\__, |_| |_|\__,_|_| |_| |_|
//         |___/


import React, { Component } from 'react';
import {HashRouter as Router ,Route , Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import NavBar from './components/layout/NavBar';
import Dashboard from './components/layout/Dashboard';
import Pokemon from './components/pokemon/Pokemon';
import backgroundImage from '../src/components/pokemon/bg2.jpg';


class App extends Component {
  render() {
  return (
    <Router>
    <div className="App" style={{ background: `url(${backgroundImage})` }}>
      <NavBar />
     
      <div className="container">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
        </Switch>
      </div>
    </div>
  </Router>
  );
 } 
}
export default App;


