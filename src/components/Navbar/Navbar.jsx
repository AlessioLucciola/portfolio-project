import React, { useState } from 'react';
import { HiMenuAlt4, HiX, HiDownload } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleMenuOnClick = (e) => {
    e.stopPropagation();
    setToggle((prevState) => !prevState);
  }

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="logo" />
      </div>
      <ul className='app__navbar-links'>
        {['about', 'projects', 'skills', 'contact'].map((section) => (
          <li className='app__flex p-text' key={`link-${section}`}>
            <a href={`#${section}`}>{section}</a>
          </li>
        ))}
        <a className='app__flex p-text' key='cv_download' id='cv_download' href='https://github.com/AlessioLucciola/portfolio-project/raw/master/src/assets/documents/CV_Alessio.pdf' download>
          <button><HiDownload />Download CV</button>
        </a>
      </ul>

      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={(e) => handleMenuOnClick(e)}/>
        
        <motion.div initial={{ width: -20 }} animate={toggle ? { width: 300 } : { width: 0 }} transition={{ duration: 0.2, ease: 'easeOut' }}>
            <motion.span initial={{ width: 0 }} animate={toggle ? { width: 70 } : {width: 0 }} transition={{ duration: 0.2, ease: 'easeOut' }}>
              <HiX onClick={(e) => handleMenuOnClick(e)} />
            </motion.span>

            <ul className='app__navbar-links'>
              {['about', 'projects', 'skills', 'contact'].map((section) => (
                <li key={section}>
                  <a href={`#${section}`} onClick={() => setToggle(false)}>{section}</a>
                </li>
              ))}
              <a className='app__flex p-text' key='cv_download' id='cv_download' href='https://github.com/AlessioLucciola/portfolio-project/raw/master/src/assets/documents/CV_Alessio.pdf'>
                <button><HiDownload />Download CV</button>
              </a>
            </ul>
        </motion.div>
      </div>
    </nav>
  )
}

export default Navbar