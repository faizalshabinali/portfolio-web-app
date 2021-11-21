import {
  faFacebook,
  faGithub,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className='HomePage'>
      <header className='hero'>
        <h1 className='hero-text'>
          Hi, I'm <span className='hero-name'> Web Developer</span>
        </h1>
        <p className='hero-sub-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione at
          culpa autem odio necessitatibus. Harum exercitationem nulla fuga quae
          voluptatum vel nam beatae. Repudiandae vitae nulla neque adipisci sint
          non.
        </p>
        <div className='icons'>
          <Link className='icon-holder' to='#'>
            <FontAwesomeIcon className='icon fb' icon={faFacebook} />
          </Link>
          <Link className='icon-holder' to='#'>
            <FontAwesomeIcon className='icon gh' icon={faGithub} />
          </Link>
          <Link className='icon-holder' to='#'>
            <FontAwesomeIcon className='icon yt' icon={faYoutube} />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
