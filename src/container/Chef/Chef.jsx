import React from 'react';

import { SubHeading } from '../../components';

import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding" id="doctors">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.drsmita} alt="Dr Smita" />
    </div>
    <div className="app__wrapper_info">
        <SubHeading title="Doctor's Word" />
        <h1 className="headtext__cormorant">What We Believe In</h1>
        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="Quote" />
            <p className="p__opensans">Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
          </div>
          <p className="p__opensans">
            Ut consectetur autem maiores nostrum quae sunt quod veritatis, pariatur aliquid ducimus ullam necessitatibus dolor facere voluptatem molestias expedita sequi perferendis hic minima error temporibus animi. 
          </p>
        </div>
        <div className="app__chef-sign">
          <p>Dr. Smita Kapure</p>
          <p className="p__opensans">Doctor &amp; Founder</p>
          <img src={images.sign} alt="Sign" />
        </div>
    </div>
  </div>
);

export default Chef;

