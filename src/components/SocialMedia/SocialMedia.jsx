import React from 'react';

import { BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => {
  const SocialMedia = [
    {
      name: 'GitHub',
      url: 'https://github.com/AlessioLucciola',
      icon: <BsGithub />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/alessio-lucciola/',
      icon: <BsLinkedin />,
    },
  ]

  return (
    <div className='fixed bottom-2 left-2 cursor-pointer p-4 z-3'>
      <div className='flex flex-col gap-2'>
        {SocialMedia.map((social, index) => (
          <a key={index} href={social.url} target='_blank' rel='noreferrer' className='text-3xl md:text-4xl duration-300 hover:text-[--secondary-color]'> 
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  )
}

export default SocialMedia