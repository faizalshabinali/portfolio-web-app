import React from 'react';
import about from '../img/about.png';

function ImageSection() {
  return (
    <div className='ImageSection'>
      <div className='image-container'>
        <img src={about} alt='about_image' />
      </div>
      <div className='about-info'>
        <h4>
          I am <span>UI/UX and Web Developer</span>
        </h4>
        <p className='about-text'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia commodi
          voluptatem qui ab ea similique veritatis. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Quia commodi
        </p>
        <div className='about-details'>
          <div className='left-section'>
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Language</p>
            <p>Address</p>
            <p>Country</p>
          </div>
          <div className='right-section'>
            <p>: Faizal Ali</p>
            <p>: 35</p>
            <p>: Indian</p>
            <p>: English, Arabic, Malayalam</p>
            <p>: Musafaha - 40, Abu Dhabi</p>
            <p>: United Arab Emirates</p>
          </div>
        </div>
        <button className='btn'>Download CV</button>
      </div>
    </div>
  );
}

export default ImageSection;
