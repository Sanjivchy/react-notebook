import React, { useState } from 'react';
import { Button } from './Button';
import {Link } from 'react-router-dom';
import './Navbar.css';

import {MenuItems}  from './Menulist';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
    <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>LOGO</Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

        {/* auto Generated nav items */}
        {MenuItems.map((item,index)=>{
        return(
            <li key={index}  className="nav-item"><Link to={item.url} className='nav-links' onClick={closeMobileMenu}>{item.title}</Link></li>
             )
         })}
        {/* ============================== */}
          <li>
            <Link to='#' className='nav-links-mobile' onClick={closeMobileMenu}> Search</Link>
          </li>
          <li>
            <Link to='/signin' className='nav-links-mobile' onClick={closeMobileMenu} >Sign In</Link>
          </li>

          <li>
            <Link to='/signup' className='nav-links-mobile' onClick={closeMobileMenu}> Sign Up</Link>
          </li>

        </ul>
        <Button/>
      </nav>
    </>
  )
}

export default Navbar;
