import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <div>
      
        <Link to="#">
         <button className='btn btn__search'>Search</button>
        </Link>
        
        <Link to='/signin'>
          <button className='btn btn__signin'>Sign In</button>
        </Link>
        
        <Link to='/signup'>  
          <button className='btn btn__signup'>Sign Up</button>
        </Link>
    </div> 
  );
}
