import React from 'react';

import { BsGithub, BsLinkedin } from 'react-icons/bs';
import './SocialMedia.scss';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
          <a href='https://github.com/AlessioLucciola' target='_blank' rel='noreferrer'><BsGithub /></a>
      </div>
      <div>
        <a href='https://www.linkedin.com/in/alessio-lucciola/' target='_blank' rel='noreferrer'><BsLinkedin /></a>
      </div>
    </div>
  )
}

export default SocialMedia