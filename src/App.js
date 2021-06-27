import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

// components
import Navbar from './components/Navbar/Navbar';
import Explore from './components/pages/explore/Explore';
import Home from './components/pages/home/Home';
import SignIn from './components/pages/login/SignIn';
import Newnote from './components/pages/newnote/Newnote'

function App() {
  return (
    <Router>
      <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Explore" component={Explore}/>
          <Route path="/Newnote" component={Newnote}/>
          <Route path="/SignIn" component={SignIn}/>
        </Switch>
    </Router>
    
  );
}

export default App;
