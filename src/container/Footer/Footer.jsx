import React from 'react';

import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Newsletter} from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links" style={{display: 'flex'}}>
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Nashik, Nagpur, Akola, Maharashtra, India</p>
        <p className="p__opensans">+91 9874563210</p>
        <p className="p__opensans">+91 9874563210</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.prakrutilogo} alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <div className="app__footer-links_icons">
          
          <a href="#"><FiFacebook /></a>
          <a href="#"><FiTwitter /></a>
          <a href="https://www.instagram.com/prakruti_organics/" target="_blank"><FiInstagram /></a>
          
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Coming SOon</p>
        <p className="p__opensans">Mon-Fri</p>
        <p className="p__opensans">Sat-Sun:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2021 Prakruti Orgnics. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
