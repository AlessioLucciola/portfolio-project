import React from 'react';

import { images } from '../../constants';
import { SectionDivider } from '../../components';
import { FaGear, FaComputer, FaBrain, FaPlane, FaCloud, FaGlasses, FaArrowRightArrowLeft, FaLanguage } from 'react-icons/fa6';
import { PiPlantBold } from 'react-icons/pi';
import { MdWeb, MdBackpack } from "react-icons/md";
import { LuSunrise } from "react-icons/lu";

const About = () => {
  const getAge = () => {
    var today = new Date();
    var birthDate = new Date('1998-10-26');
    var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
      }
    return age;
  }

  const tags = [
    { name: 'Tech Enthusiast', icon: <FaComputer /> },
    { name: 'Deep Learning', icon: <FaBrain /> },
    { name: 'Web Development', icon: <MdWeb /> },
    { name: 'Cloud Computing', icon: <FaCloud /> },
    { name: 'Full Stack Development', icon: <FaArrowRightArrowLeft /> },
    { name: 'Geek', icon: <FaGlasses /> },
    { name: 'Vegetarian', icon: <PiPlantBold /> },
    { name: 'Solo-Traveler', icon: <FaPlane /> },
    { name: 'Backpacker', icon: <MdBackpack /> },
    { name: 'Language Enthusiast', icon: <FaLanguage /> }
  ]

  return (
    <>
      <a id='about' />
      <div className='app-container pt-[5rem]'>
        <h2 className='head-text'>About Me.</h2>
        <div className='app-section flex flex-col gap-3'>
          <div className='flex justify-center lg:justify-left'>
              <p className='sub-head-text'>Hey! Nice to meet you.</p>
          </div>
          <div className='flex flex-col gap-5 justify-center 2xl:flex-row mx-auto text-center 2xl:text-left'>
            <img src={images.me} alt='alessio-lucciola' className='rounded-full w-[15rem] 2xl:w-[20rem] mx-auto shadow-xl'/>
            <div>
              <p>
                I’m <span className='highlight-text'>Alessio Lucciola</span>, a {getAge()}-year-old <span className='highlight-text'>Software Engineer</span> from Italy with a deep passion for technology. After earning my <span className='highlight-text'>Bachelor’s Degree</span> in <span className='highlight-text'>Computer Science</span> in March 2022, I am now pursuing a <span className='highlight-text'>Master’s Degree</span> at <span className='highlight-text'>Sapienza - University of Rome</span>. My journey in tech has been driven by a constant curiosity and a desire to stay at the forefront of innovation.
                Fluent in the digital world, I am particularly passionate about <span className='highlight-text'>AI</span> and <span className='highlight-text'>deep learning</span>, which inspires me to create and experiment with new projects. While I have a strong interest in <span className='highlight-text'>Web Application</span> development, I also enjoy exploring emerging technologies and tackling complex challenges.
                In my free time, I work on projects like developing blogs or websites with the latest technologies and exploring new deep-learning problems. For a closer look at my work and skills, please visit my <span className='highlight-text'><a href='https://github.com/AlessioLucciola' aria-label='Github page'>GitHub page</a></span>.
              </p>
              <div className='flex flex-wrap justify-center gap-2 mt-5'>
                {tags.map((tag, index) => (
                  <div key={index} className='flex items-center p-1 gap-2 border-2 rounded-xl border-[--secondary-color] text-[--secondary-color]'>
                    {tag.icon}
                    <p>{tag.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <SectionDivider />
    </>
  )
}

export default About