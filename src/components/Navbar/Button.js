import React from 'react';
import './Button.css';
import {BrowserRouter as Router, Link } from 'react-router-dom';

export function Button() {
  return (
    <div>
        <Link to="SignIn">
         <button className='btn btn__search'>Search</button>
        </Link>
        <Link to='SignIn'>
          <button className='btn btn__signin'>Sign In</button>
        </Link>
        <Link to='SignIn'>  
          <button className='btn btn__signup'>Sign Up</button>
        </Link>
    </div> 
  );
}
