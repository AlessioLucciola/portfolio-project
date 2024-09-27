import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ReactCountryFlag from "react-country-flag";

import { SectionDivider } from '../../components';
import { images } from '../../constants';

const Skills = () => {
  const allSkills = [
    { name: "Python", tag: "Languages", imgName: "python" },
    { name: "Javascript", tag: "Languages", imgName: "javascript" },
    { name: "Typescript", tag: "Languages", imgName: "typescript" },
    { name: "Java", tag: "Languages", imgName: "java" },
    { name: "Golang", tag: "Languages", imgName: "golang" },
    { name: "Solidity", tag: "Languages", imgName: "solidity" },
    { name: "HTML5", tag: "Frontend", imgName: "html" },
    { name: "CSS", tag: "Frontend", imgName: "css" },
    { name: "SCSS", tag: "Frontend", imgName: "scss" },
    { name: "Tailwind", tag: "Frontend", imgName: "tailwind" },
    { name: "ReactJS", tag: "Frontend", imgName: "reactjs" },
    { name: "ReactNative", tag: "Frontend", imgName: "reactnative" },
    { name: "NextJS", tag: "Frontend", imgName: "nextjs" },
    { name: "Django", tag: "Backend", imgName: "django" },
    { name: "ExpressJS", tag: "Backend", imgName: "express" },
    { name: "Hardhat", tag: "Backend", imgName: "hardhat" },
    { name: "PostgreSQL", tag: "Backend", imgName: "postgresql" },
    { name: "MySQL", tag: "Backend", imgName: "mysql" },
    { name: "GraphQL", tag: "Backend", imgName: "graphql" },
    { name: "Strapi", tag: "Backend", imgName: "strapi" },
    { name: "Bootstrap", tag: "Frontend", imgName: "bootstrap" },
    { name: "Docker", tag: "Software and Libraries", imgName: "docker" },
    { name: "AWS", tag: "Software and Libraries", imgName: "aws" },
    { name: "Postman", tag: "Software and Libraries", imgName: "postman" },
    { name: "K6", tag: "Software and Libraries", imgName: "k6" },
    { name: "Terraform", tag: "Software and Libraries", imgName: "terraform" },
    { name: "PyTorch", tag: "AI", imgName: "pytorch" },
    { name: "PySpark", tag: "AI", imgName: "spark" },
    { name: "ScikitLearn", tag: "AI", imgName: "scikitlearn" },
    { name: "Photoshop", tag: "Software and Libraries", imgName: "photoshop" },
    { name: "MarvelApp", tag: "Software and Libraries", imgName: "marvel" },
    { name: "GitLab", tag: "Version Control", imgName: "gitlab" },
    { name: "GitHub", tag: "Version Control", imgName: "github" },
  ]

  const languages = [
    { name: "Italian", iso: "it", level: "C2", certification: "None (Native)" },
    { name: "English", iso: "gb", level: "B2", certification: "Cambridge English - First (FCE)" },
    { name: "Spanish", iso: "es", level: "B1", certification: "Diplomas de Español como Lengua Extranjera (DELE)" },
    { name: "French", iso: "fr", level: "B1", certification: "Diplôme d'Etudes en Langue Française (DELF)" },
  ]

  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
  //const [skills, setSkills] = useState(allSkills);
  const [filterSkill, setFilterSkill] = useState(allSkills);
  const skills = allSkills;

  const handleSkillsFilter = (item) => {
    if (activeFilter !== item) {
      setActiveFilter(item);
      setAnimateCard([{opacity: 0}])

      setTimeout(() => {
        setAnimateCard([{opacity: 1}])

        if(item === 'All') {
          setFilterSkill(skills);
        } else {
          setFilterSkill(skills.filter((skill) => skill.tag.includes(item)))
        }
      }, 500);
    }
  }

  const getImgPath = (item) => {
   return images[item];
  }

  return (
    <>
      <a id='skills' />
      <div className='app-container'>
        <h2 className='head-text'>Skills.</h2>
        <div className='flex flex-col gap-2'>
          <div className='app-section flex flex-col gap-5'>
            <p className='font-bold text-2xl text-center'>
              Computer Science
            </p>
            <div className='flex flex-wrap justify-center gap-2'>
              {['All', 'Languages', 'Frontend', 'Backend', 'AI', 'Software and Libraries', 'Version Control'].map((item, index) => (
                <div key={index} onClick={() => handleSkillsFilter(item)} className={`py-2 px-5 rounded-xl cursor-pointer text-sm font-medium border-2 border-[--secondary-color] duration-300 hover:bg-[--secondary-color] hover:text-white ${activeFilter === item && 'bg-[--secondary-color] text-white'}`}>
                  {item}
                </div>
              ))}
            </div>
          
            <motion.div animate={animateCard} transition={{ duration: 0.3, delayChildren: 0.5 }}>
                <div className='flex flex-wrap justify-center items-center text-center gap-7'>
                  {filterSkill.map((skill, index) => (
                    <div className='flex flex-col justify-center' key={index}>
                      <img src={getImgPath(skill.imgName)} alt={skill.name} className='p-3 rounded-full w-[5rem] h-[5rem] object-contain bg-[--primary-color]' />
                      {skill.name}
                    </div>
                  ))}
                </div>
            </motion.div>
          </div>

          <div className='app-section flex flex-col gap-5'>
            <p className='font-bold text-2xl text-center'>
              Languages
            </p>
            <div className='flex flex-col justify-center text-center gap-3'>
              {languages.map((language, index) => (
                <div className='flex flex-col md:flex-row md:justify-left items-center gap-3' key={index}>
                  <div className='w-[4rem] h-[4rem] p-2 bg-[--primary-color] rounded-full'>
                    <ReactCountryFlag countryCode={language.iso} svg style={{width: '3em', height: '3em', padding: '5px'}}/>
                  </div>
                  <div className='flex flex-col justify-center text-center md:justify-left md:text-left'>
                    <span className='font-bold'>
                    {language.name}
                    </span>
                    <span>
                      Certification: {language.certification}
                    </span>
                    <span>
                      Level: {language.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <SectionDivider />
    </>
  )
}

export default Skills