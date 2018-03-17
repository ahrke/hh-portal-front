import React from 'react';

const NavBar = () => {
  return (
    <div className='navbar-fixed'>
      <nav>
        <div className="nav-wrapper blue">
          <a className='left'>HH School</a>
          <a className="brand-logo center">super awesome quote</a>
          <ul id="nav-mobile" className="right">
            <li><a href="/">Sign Out</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;
