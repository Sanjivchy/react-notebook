import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

// components
import Navbar from './components/Navbar/Navbar';
import Explore from './components/pages/Explore';
import Home from './components/pages/Home';
import NewNote from './components/pages/NewNote';


function App() {
  return (
    <Router>
      <Navbar/>
      
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/Explore" component={Explore}/>
      <Route path="/Newnote" component={NewNote}/>
      </Switch>
    </Router>
    
  );
}

export default App;
