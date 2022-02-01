import React from 'react';

import { images } from '../../constants';

import './AboutUs.css';


const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.P} className="app__aboutus-p-image" alt="P letter" />

    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">
          About Us
          {/* <img src={images.spoon} alt="about_spoon" className="spoon__img"/> */}
          <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quaerat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur explicabo quia corporis at consequuntur officiis maiores nulla, quidem voluptatibus repellendus ullam rem 
          </p>
          {/* <button type="button" className="custom__button">Know More</button> */}
        </h1>
      </div>

      <div className="app__aboutus-content_bottle flex__center">
        {/* <img src={images.knife} alt="about_knife" /> */}
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">
          Our History
          {/* <img src={images.spoon} alt="about_spoon" className="spoon__img"/> */}
          <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quaerat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur explicabo quia corporis at consequuntur officiis maiores nulla, quidem voluptatibus repellendus ullam rem 
          </p>
          {/* <button type="button" className="custom__button">Know More</button> */}
        </h1>
      </div>
    </div>
  </div>
);

export default AboutUs;
