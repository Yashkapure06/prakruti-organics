import React from 'react';


import {SubHeading} from '../../components';
import {images} from '../../constants';

import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import './Gallery.css';

const Gallery = () => {
  const scrollref = React.useRef(null);
  const scroll =(direction)=>{
     const { current } =scrollref;

      if(direction === 'left'){
        current.scrollLeft -= 300;
      }else{
        current.scrollLeft += 300;
      }
  }
const gallery =[images.gallery01, images.gallery02, images.gallery03, images.gallery04]
  return(
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{color:"#AAA", marginTop: '2rem'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eveniet totam dolores, maiores atque, veniam officia expedita molestias obcaecati temporibus error eaque in dolorem cumque magni nesciunt, alias deserunt dolorum!
        </p>
        {/* <button type="button" className="custom__button">View More</button> */}

      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollref}>
          {gallery.map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index+1}`}>
              <img src={image} alt="gallery_image" />
              <a className="gallery__image-icon" href="https://www.instagram.com/prakruti_organics/" target="_blank">
               <BsInstagram />
              </a>
            </div>
          ))}
        </div>

        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrows-icon" onClick={()=> scroll('left')}/>
          <BsArrowRightShort className="gallery__arrows-icon" onClick={()=> scroll('right')}/>
        </div>
      </div>
    </div>
  );
}
export default Gallery;
