import React, { useState, useEffect } from 'react';
import { HiMenuAlt4, HiX, HiDownload } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";
import i18next from 'i18next';
import cookies from 'js-cookie';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const languages = [
    {
      code: 'en',
      name: 'English',
      country_code: 'us',
      flag: images.usaflag,
    },
    {
      code: 'it',
      name: 'Italiano',
      country_code: 'it',
      flag: images.italianflag
    },
  ]

  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation();

  useEffect(() => {
    document.body.dir = currentLanguage.dir || 'ltr'
  }, [currentLanguage, t])

  const [toggle, setToggle] = useState(false);

  const handleMenuOnClick = (e) => {
    e.stopPropagation();
    setToggle((prevState) => !prevState);
  }

  const sections = [t('sections.about.name'), t('sections.projects.name'), t('sections.skills.name'), t('sections.contact.name')]

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
            <motion.span initial={{ width: 0 }} animate={toggle ? { width: 70 } : { width: 0 }} transition={{ duration: 0.2, ease: 'easeOut' }}>
              {/*{currentLanguageCode == 'en' ? (
                <a href='' onClick={() => {i18next.changeLanguage('it')}}>
                  <img src={images.italianflag} alt={'it-flag'} />
                </a>
              ) : (
                <a href='' onClick={() => {i18next.changeLanguage('en')}}>
                  <img src={images.usaflag} alt={'en-flag'} />
                </a>
              )}*/}
              <HiX onClick={(e) => handleMenuOnClick(e)} />
              </motion.span>
            
            <motion.ul className='app__navbar-links'>
              {sections.map((section) => (
                <li key={section}>
                  <a href={`#${section}`} onClick={() => setToggle(false)}>{section}</a>
                </li>
              ))}
              <a className='app__flex p-text' key='cv_download' id='cv_download' href='https://github.com/AlessioLucciola/portfolio-project/raw/master/src/assets/documents/CV_Alessio.pdf'>
                <button><HiDownload />Download CV</button>
              </a>
            </motion.ul>
        </motion.div>
      </div>
    </nav>
  )
}

export default Navbar