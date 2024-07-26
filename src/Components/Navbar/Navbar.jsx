import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navmain'>
      <div>
        <img src={logo} alt="" />
      </div>
      <div className='hamburger-menu' onClick={handleMenuToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {isMenuOpen && (
        <div className='mobile-nav'>
          <div className='navtags'>
            <p id='navp1'>Products</p>
            <p id='navp2'>Company</p>
            <p id='navp3'>Features</p>
            <p id='navp4'>Pricing</p>
            <p id='navp5'>Support</p>
          </div>
          <div className='navbtns'>
            <button id='loginbtn'>Login</button>
            <button id='openbtn'>Open Account</button>
          </div>
        </div>
      )}
      <div className='desktop-nav'>
        <div className='navtags'>
          <p id='navp1'>Products</p>
          <p id='navp2'>Company</p>
          <p id='navp3'>Features</p>
          <p id='navp4'>Pricing</p>
          <p id='navp5'>Support</p>
        </div>
        <div className='navbtns'>
          <button id='loginbtn'>Login</button>
          <button id='openbtn'>Open Account</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;