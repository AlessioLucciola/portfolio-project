import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { SectionDivider } from '../../components';
import { images } from '../../constants';
import './Skills.scss';

const Skills = () => {
  const allSkills = [
    { name: "Java", tag: "Languages", imgName: "java" },
    { name: "Golang", tag: "Languages", imgName: "golang" },
    { name: "Python", tag: "Languages", imgName: "python" },
    { name: "Javascript", tag: "Languages", imgName: "javascript" },
    { name: "Typescript", tag: "Languages", imgName: "typescript" },
    { name: "HTML5", tag: "Frontend", imgName: "html" },
    { name: "CSS", tag: "Frontend", imgName: "css" },
    { name: "SCSS", tag: "Frontend", imgName: "scss" },
    { name: "ReactJS", tag: "Frontend", imgName: "reactjs" },
    { name: "ReactNative", tag: "Frontend", imgName: "reactnative" },
    { name: "Django", tag: "Backend", imgName: "django" },
    { name: "ExpressJS", tag: "Backend", imgName: "express" },
    { name: "PHP", tag: "Languages", imgName: "php" },
    { name: "PostgreSQL", tag: "Backend", imgName: "postgresql" },
    { name: "MySQL", tag: "Backend", imgName: "mysql" },
    { name: "Bootstrap", tag: "Frontend", imgName: "bootstrap" },
    { name: "Docker", tag: "Software and Libraries", imgName: "docker" },
    { name: "AWS", tag: "Software and Libraries", imgName: "aws" },
    { name: "Postman", tag: "Software and Libraries", imgName: "postman" },
    { name: "K6", tag: "Software and Libraries", imgName: "k6" },
    { name: "Terraform", tag: "Software and Libraries", imgName: "terraform" },
    { name: "Spark", tag: "Software and Libraries", imgName: "spark" },
    { name: "ScikitLearn", tag: "Software and Libraries", imgName: "scikitlearn" },
    { name: "Photoshop", tag: "Software and Libraries", imgName: "photoshop" },
    { name: "MarvelApp", tag: "Software and Libraries", imgName: "marvel" },
    { name: "GitLab", tag: "Version Control", imgName: "gitlab" },
    { name: "GitHub", tag: "Version Control", imgName: "github" },
  ]

  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
  //const [skills, setSkills] = useState(allSkills);
  const [filterSkill, setFilterSkill] = useState(allSkills);
  const skills = allSkills;

  const handleSkillsFilter = (item) => {
    if (activeFilter !== item) {
      setActiveFilter(item);
      setAnimateCard([{y:100, opacity: 0}])

      setTimeout(() => {
        setAnimateCard([{y:0, opacity: 1}])

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
      <div className='app__skills'>
        <h2 className='head-text'>Skills.</h2>
        <div className='app__skills-filter'>
          {['All', 'Languages', 'Frontend', 'Backend', 'Software and Libraries', 'Version Control'].map((item, index) => (
            <div key={index} onClick={() => handleSkillsFilter(item)} className={`app__skills-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}>
              {item}
            </div>
          ))}
        </div>

        <motion.div animate={animateCard} transition={{ duration: 0.5, delayChildren: 0.5 }} className='app__skills-motion'>
            <div className='app__skills-item-container app__flex'>
              {filterSkill.map((skill, index) => (
                <div className='app__skills-item' key={index}>
                  <div className='app__skills-img app__flex'>
                    <img src={getImgPath(skill.imgName)} alt={skill.name}/>
                  </div>
                  <div className='app__skills-content app__flex'>
                    <h4 className='bold-text'>
                      {skill.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
        </motion.div>
      </div>
      <SectionDivider />
    </>
  )
}

export default Skills