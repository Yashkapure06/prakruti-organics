import React, { useState } from 'react';
import { GiHamburgerMenu, GiCrossMark } from 'react-icons/gi';
// import { MdRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = React.useState(false);


    return(
    <nav className="app__navbar app__bg">
      <div className="app__navbar-logo">
        <a href="#" ><img src={images.prakrutilogo} alt="Prakruti Orgaincs" /></a>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#doctors">Doctors</a></li>
        <li className="p__opensans"><a href="#awards">Awards</a></li>
        <li className="p__opensans"><a href="#login">Contact</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Register</a>
        <div/>
        <a href="#login" className="p__opensans">Book Oil</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu className="app__navbar-menu" color="#fff" fontSize={27} onClick={()=>setToggleMenu(true)}/>

      {toggleMenu &&(

        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <GiCrossMark fontSize={27} className="overlay__close" onClick={()=>setToggleMenu(false)}/>

          <ul className="app__navbar-smallscreen_links">
            <li className="p__opensans"><a href="#home">Home</a></li>
            <li className="p__opensans"><a href="#about">About</a></li>
            <li className="p__opensans"><a href="#doctors">Doctors</a></li>
            <li className="p__opensans"><a href="#awards">Awards</a></li>
            <li className="p__opensans"><a href="#contact">Contact</a></li>
          </ul>
        </div>

      )}
      </div>
    </nav>
  );
}

export default Navbar;
