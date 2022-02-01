import React from 'react';
import { SubHeading } from '../../components';

import  { images } from '../../constants';

import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title=" the new Ayurvedic Hair Oil"/>
      <h1 className="app__header-h1">The Key to Best Hairs & Skin</h1>
      <p className="p__opensans" style={{margin: '2rem 0'}}>
      Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus 
      </p>
      {/* <button type="button" className="custom__button">
        Explore More
      </button> */}
    </div>

    <div className="app__wrapper_img">
    <img src={images.prakruti} alt="Header Img" />
    </div>
  </div>
);

export default Header;
