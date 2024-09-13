import React, { useState, useEffect } from 'react';
import { HiMenuAlt4, HiX, HiDownload } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";
//import i18next from 'i18next';
import cookies from 'js-cookie';

import { images } from '../../constants';

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

  const sections = [
    t('sections.about.name'),
    t('sections.projects.name'),
    t('sections.skills.name'),
    t('sections.contact.name')
  ]

  return (
    <nav className="w-full flex justify-between items-center py-4 px-8 fixed z-20 bg-transparent backdrop-blur-md">
      <div className="flex justify-start items-center">
        <img src={images.logo} alt="logo" className="w-14 h-14 md:w-20 md:h-20" />
      </div>

      <ul className="flex-1 flex justify-end items-center space-x-8 hidden md:flex">
        {['about', 'projects', 'skills', 'contact'].map((section) => (
          <li className="cursor-pointer uppercase font-medium text-gray-600 duration-100 hover:text-[--secondary-color] hover:border-b-2 hover:border-[--secondary-color]" key={`link-${section}`}>
            <a href={`#${section}`}>{section}</a>
          </li>
        ))}
        <a
          className="p-2 bg-[--secondary-color] text-white rounded-lg border-2 border-[--secondary-color] hover:bg-white hover:text-[--secondary-color] flex items-center space-x-2"
          key="cv_download"
          id="cv_download"
          href="https://github.com/AlessioLucciola/portfolio-project/raw/master/src/assets/documents/CV_Alessio.pdf"
          download
        >
          <HiDownload />
          <span>Download CV</span>
        </a>
      </ul>

      <div className="relative md:hidden">
        <HiMenuAlt4 className="w-8 h-8 text-white bg-[--secondary-color] p-2 rounded-full" onClick={handleMenuOnClick} />
        <motion.div
          initial={{ width: 0 }}
          animate={toggle ? { width: '100%' } : { width: 0 }}
          exit={{ width: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className={`fixed top-0 right-0 bottom-0 bg-white h-[100vh] shadow-lg p-6 z-50 ${!toggle && 'hidden'}`}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={toggle ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute top-4 right-4"
          >
            <HiX className="w-8 h-8 text-secondary" onClick={handleMenuOnClick} />
          </motion.span>

          <motion.ul className="flex flex-col items-center space-y-4 mt-10">
            {sections.map((section) => (
              <li key={section} className="text-lg font-medium">
                <a href={`#${section}`} onClick={() => setToggle(false)}>{section}.</a>
              </li>
            ))}
            <a
              className="p-2 bg-[--secondary-color] text-white rounded-lg flex items-center space-x-2"
              key="cv_download"
              id="cv_download"
              href="https://github.com/AlessioLucciola/portfolio-project/raw/master/src/assets/documents/CV_Alessio.pdf"
            >
              <HiDownload />
              <span>Download CV</span>
            </a>
          </motion.ul>
        </motion.div>
      </div>
    </nav>
  );
}

export default Navbar