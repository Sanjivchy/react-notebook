import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <div>
       <Link>
         <button className='btn btn__Search'>Search</button>
      </Link>
     <Link>
       <button className='btn btn__signin'>Sign In</button>
     </Link>
      <Link to='sign-up'>  
        <button className='btn btn__signup'>Sign Up</button>
      </Link>
    </div> 
  );
}
