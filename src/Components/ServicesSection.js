import React from 'react';

function ServicesSection({ image, title }) {
  return (
    <div className='ServicesSection'>
      <div className='service'>
        <div className='service-content'>
          <img src={image} alt='design_image' />
          <h5 className='service-title'>{title}</h5>
          <p className='service-text'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            consequuntur magni temporibus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
