import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => {
    return(
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Contact Us" />
        <h1 className="headtext__cormorant">Order your Oil Now!</h1>
      </div>
      <form action="mailto:prakrutiorganics2@gmail.com">
        <div className="app__newsletter-input flex__center">
          <input type="text" placeholder="Enter your Name" required/><br/>
          <input type="phone" placeholder="Enter your phone number" required/><br/>
          <input type="email" placeholder="Enter your email address" /><br/>
          <input type="text" placeholder="Enter your Message" required/><br/>
        </div>
        <div className="flex__center" >
          <button type="submit" className="custom__button" style={{marginRight:'1rem'}}>Submit</button>
          <button type="reset" className="custom__button" >Reset</button>
        </div>
      </form>
    </div>
  );
}

export default Newsletter;
