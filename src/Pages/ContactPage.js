import React from 'react';
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Title from '../Components/Title';

function ContactPage() {
  return (
    <>
      <div className='contact-title'>
        <Title title={'Contact Me'} span={'Contact Me'} />

      </div>
      <div className='ContactPage'>
        <div className='map-section'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6409.374831130928!2d54.48290790512031!3d24.34871283018104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e40fb8218df69%3A0x2196465f2b62ef53!2sEmirates%20Pearl%20Printing%20Press!5e0!3m2!1sen!2sae!4v1638274343805!5m2!1sen!2sae'
            width='600'
            height='450'
            frameBorder='0'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
          ></iframe>
        </div>
        <div className='contact-section'>
          <ContactItem
            icon={phone}
            title='Phone'
            text1={'+971 55 140 8079'}
            text2={'+971 2 5856131'}
          />
          <ContactItem
            icon={email}
            title='Email'
            text1={'loremipsum@email.com'}
            text2={'loremipsum135@email.com'}
          />
          <ContactItem
            icon={location}
            title='Address'
            text1={'Muisafah - M40'}
            text2={'Abu Dhabi - UAE'}
          />
        </div>
      </div>
    </>
  );
}

export default ContactPage;
