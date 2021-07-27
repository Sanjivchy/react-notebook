import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Navbar from '.././components/Navbar/Navbar';
import Explore from '../components/pages/explore/Explore';
import Home from '.././components/pages/home/Home';
import SignIn from '.././components/pages/login/SignIn';
import SignUp from '.././components/pages/login/Signup';
import Newnote from '.././components/pages/newnote/Newnote';
import Empty from '.././components/pages/404/Empty';

function Routes() {
    return (
        <Router>
        <Navbar/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/Explore" component={Explore}/>
            <Route path="/Newnote" component={Newnote}/>
            <Route path="/SignIn" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/Empty" component={Empty}/>
          </Switch>
      </Router>
    )
}

export default Routes
