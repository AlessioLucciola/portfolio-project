import React, { useState, useEffect } from 'react';
import { HiMenuAlt4, HiX, HiDownload } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";
//import i18next from 'i18next';
import cookies from 'js-cookie';
import ReactCountryFlag from 'react-country-flag';

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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const handleMenuOnClick = (e) => {
    e.stopPropagation();
    setToggle((prevState) => !prevState);
  }

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  }

  const handleMobileDropdownToggle = () => {
    setMobileDropdownOpen(!mobileDropdownOpen);
  };

  const sections = [
    t('sections.about.name'),
    t('sections.projects.name'),
    t('sections.skills.name'),
    t('sections.contact.name')
  ]

  useEffect(() => {
    if (toggle) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    // Clean up to ensure scroll is enabled when component unmounts
    return () => document.body.classList.remove('overflow-hidden');
  }, [toggle]);

  const CVButtons = [
    {
      key: 'cv_download_en',
      id: 'cv_download_en',
      string: 'Download CV',
      iso: 'gb',
      href: 'https://github.com/AlessioLucciola/portfolio-project/raw/master/src/assets/documents/CV_Alessio-English.pdf',
    }, 
    {
      key: 'cv_download_it',
      id: 'cv_download_it',
      string: 'Scarica CV',
      iso: 'it',
      href: 'https://github.com/AlessioLucciola/portfolio-project/raw/master/src/assets/documents/CV_Alessio-Italiano.pdf',
    }
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
        <div className="relative">
          <button
            className="p-2 bg-[--secondary-color] text-white rounded-lg border-2 border-[--secondary-color] hover:bg-white hover:text-[--secondary-color] flex items-center space-x-2"
            onClick={handleDropdownToggle}
          >
            <HiDownload />
            <span>Download CV</span>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              {CVButtons.map((button) => (
                <a
                  className="flex items-center p-2 text-gray-800 hover:bg-gray-100 space-x-2 duration-200"
                  key={button.key}
                  href={button.href}
                  download
                >
                  <ReactCountryFlag countryCode={button.iso} svg alt={`${button.iso}-flag`} />
                  <span>{button.string}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </ul>

      <div className="relative md:hidden">
        <HiMenuAlt4 className="w-8 h-8 text-white bg-[--secondary-color] p-2 rounded-full" onClick={handleMenuOnClick} />
        <motion.div
          initial={{ width: 0 }}
          animate={toggle ? { width: '100%' } : { width: 0 }}
          exit={{ width: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className={`fixed top-0 right-0 bottom-0 bg-white h-[100vh] shadow-lg p-6 z-50 ${!toggle && 'hidden'}`}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={toggle ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute top-4 right-4"
          >
            <HiX className="w-8 h-8 text-secondary" onClick={handleMenuOnClick} />
          </motion.span>

          <motion.ul className="flex flex-col justify-center items-center h-full gap-5">
            {sections.map((section) => (
              <li key={section} className="text-lg font-medium">
                <a href={`#${section}`} onClick={() => setToggle(false)}>{section}.</a>
              </li>
            ))}
            
            <div className="relative">
              <button
                className="p-2 text-center bg-[--secondary-color] border-2 border-[--secondary-color] duration-200 hover:bg-white hover:text-[--secondary-color] text-white rounded-lg flex items-center space-x-2"
                onClick={handleMobileDropdownToggle}
              >
                <HiDownload />
                <span>Download CV</span>
              </button>

              {mobileDropdownOpen && (
                <div className="absolute top-[100%] mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  {CVButtons.map((button) => (
                    <a
                      className="flex items-center p-2 text-gray-800 hover:bg-gray-100 space-x-2 duration-200"
                      key={button.key}
                      href={button.href}
                      download
                    >
                      <ReactCountryFlag countryCode={button.iso} svg alt={`${button.iso}-flag`} />
                      <span>{button.string}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.ul>
        </motion.div>
      </div>
    </nav>
  );
}

export default Navbar