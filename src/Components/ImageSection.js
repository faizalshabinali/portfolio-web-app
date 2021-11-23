import React from 'react';
import about from '../img/about.jpg';

function ImageSection() {
  return (
    <div className='ImageSection'>
      <div className='image-container'>
        <img src={about} alt='about_image' />
      </div>
      <div className='about-info'>
        <h4>
          I am <span>Lorem, ipsum dolor.</span>
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia commodi
          voluptatem qui ab ea similique veritatis. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Quia commodi
        </p>
      </div>
      <div className='about-details'></div>
    </div>
  );
}

export default ImageSection;
