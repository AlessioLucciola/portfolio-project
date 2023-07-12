import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { SectionDivider } from '../../components';
import { images } from '../../constants';
import { BiWorld } from 'react-icons/bi';
import { AiOutlineGithub, AiFillYoutube, AiFillDelete } from 'react-icons/ai';
import './Projects.scss';

const Projects = () => {
  const allProjects = [
    {name: 'Airbnb Price Prediction', description: 'Machine Learning model created using PySpark for predicting the price of an Airbnb. A web application was created to test the model.', img: images.airbnb, tags: ['MachineLearning', 'Python', 'Spark', 'ReactJS', 'WebApp', 'MySQL', 'Django', 'Typescript', 'Docker'], website: '', github: 'https://github.com/AlessioLucciola/airbnb-price-predictor', youtube: 'https://www.youtube.com/watch?v=CLMlq0RHy-0&ab_channel=AlessioLucciola'},
    {name: 'Voicefork', description: "A TheFork mobile app clone whose backend is implemented using a microservices structure. The app was developed using React Native, the microservices using both Express and FastAPI. The project has been also deployed on AWS, and the infrastructure is defined using Terraform, and it's load tested using k6", img: images.voicefork, tags: ['MobileApp', 'Typescript', 'Python', 'Docker', 'React Native', 'MySQL', 'PostgreSQL', 'Redis', 'Terraform', 'k6', 'Express', 'Prisma', 'FastAPI', 'Faiss'], website: '', github: 'https://github.com/AlessioLucciola/voicefork', youtube: 'https://www.youtube.com/watch?v=0-LgkOZpavc&ab_channel=AlessioLucciola'},
    {name: 'Voicefork Alexa Skill', description: 'An Alexa Skill that uses the same backend as Voicefork that focuses on restaurant name disambiguation by the voice assistant, focusing on the user context and the restaurant features (cuisine, rating, and location) in order to proceed with the disambiguation.', img: images.voiceforkskill, tags: ['VoiceUserInterface', 'Alexa', 'Typescript'], website: '', github: 'https://github.com/AlessioLucciola/voicefork-alexa-skill', youtube: 'https://www.youtube.com/watch?v=PHmqiMtnwJc&ab_channel=AlessioLucciola'},
    {name: 'GeneroCity', description: 'I took part in an internship with GamificationLab, a "Sapienza University of Rome" laboratory that deals with the design and development of web applications. I worked mainly on the development of new APIs for a smart parking application called GeneroCity, using Go programming language.', img: images.generocity, tags: ['MobileApp', 'Backend', 'Golang', 'PostgreSQL'], website: 'https://www.generocity.it/', github: '', youtube: ''},
    {name: 'BiometricBites', description: 'Web application that allows biometric access to the university cafeteria with face recognition. The frontend is developed with ReactJS, the backend with Django.', img: images.biometricbites, tags: ['WebApp', 'FaceRecognition', 'Typescript', 'ReactJS', 'SCSS', 'Django', 'Python', 'MySQL'], website: '', github: 'https://github.com/AlessioLucciola/BiometricBites', youtube: 'https://www.youtube.com/watch?v=LcW3Yzed4Fs&ab_channel=AlessioLucciola'},
    {name: 'Machine Learning Model for Stroke Prediction', description: 'Homeworks for the master\'s degree in Computer Science course "Fundamentals of Data Science" at the University of Rome "La Sapienza" that consisted in creating a machine learning model for predicting strokes.', img: images.strokeprediction, tags: ['MachineLearning', 'Python'], website: '', github: 'https://github.com/AlessioLucciola/fundamentals-of-data-science', youtube: ''},
    {name: 'Q-Learning Routing Protocol for Drones', description: 'Homeworks for the master\'s degree in Computer Science course "Autonomous Networking" at the University of Rome "La Sapienza" that consisted in implementing a routing protocol for UAV ad-hoc wireless networks using Q-learning.', img: images.autonomousnetworking, tags: ['ReinforcementLearning', 'Python'], website: '', github: 'https://github.com/AlessioLucciola/autonomous-networking', youtube: ''},
    {name: 'Lucciola Legnami', description: 'I build the website of a lumber store using mainly ReactJS (for frontend) and PHP (for backend). The website shows overall information about the website and the sold products. Users are able to ask for online quotes. Admins have a private area in which they can manage the website functionalities (More info on Github).', img: images.lucciolalegnami, tags: ['WebApp', 'Javascript', 'ReactJS', 'SCSS', 'Bootstrap', 'PHP', 'MySQL'], website: 'https://www.lucciolalegnami.it/', github: 'https://github.com/AlessioLucciola/lucciolalegnami-project', youtube: ''},
    {name: 'MiniBabelNet', description: 'BabelNet is a multilingual linguistic resource that aggregates lexicographic and encyclopedic information from heterogeneous resources in different languages ​​into a single semantic network (More info on GitHub). miniBabelNet represents a reduced and simplified version of BabelNet that consists in: A system for loading and storing text documents, a measure of lexical similarity between words in the miniBabelNet network, a measure of semantic similarity between concepts (synset) in the miniBabelNet network, the implementation of a similarity measure between documents. The whole project is developed in Java.', img: images.babel, tags: ['Java'], website: '', github: 'https://github.com/AlessioLucciola/babelarity-project', youtube: ''},
    {name: 'QuizArt', description: 'Human Computer Interaction project in which I designed an Android application from scratch, starting from need finding up to prototyping (using MarvelApp) and final testing with users.', img: images.quizart, tags: ['Marvel App'], website: '', github: 'https://github.com/AlessioLucciola/QuizArt-app-per-beni-culturali', youtube: ''},
    {name: 'Portfolio', description: 'Personal portfolio built using ReactJS.', img: images.logo, tags: ['Javascript', 'ReactJS', 'SCSS'], website: '', github: 'https://github.com/AlessioLucciola/portfolio-project', youtube: ''},
  ];

  const [visibleProjectNumber, setVisibleProjectNumber] = useState(3);
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [activeFilter, setActiveFilter] = useState(null);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })

  const handleProjectFilter = (item) => {
    if (activeFilter !== item) {
      setActiveFilter(item);
      setAnimateCard([{y:100, opacity: 0}])

      setTimeout(() => {
        setAnimateCard([{y:0, opacity: 1}])

        if(item === null) {
          setFilteredProjects(allProjects);
        } else {
          setFilteredProjects(allProjects.filter((project) => project.tags.includes(item)))
        }
      }, 500);
    } else {
      handleRemoveProjectFilter()
    }
  }

  const handleRemoveProjectFilter = () => {
      setAnimateCard([{y:100, opacity: 0}])
      setTimeout(() => {
        setAnimateCard([{y:0, opacity: 1}])
        setActiveFilter(null)
        setFilteredProjects(allProjects)
      }, 500)
  }

  return (
    <>
      <a id='projects' />
      <div className='app__projects'>
        <h2 className='head-text'>Projects.</h2>
        {activeFilter !== null ? (
          <div className='app__projects-active-filter-button' onClick={() => handleRemoveProjectFilter()}>
            <AiFillDelete /> Active filter: {activeFilter}
          </div>
        ) : (
          ''
        )}
        <motion.div animate={animateCard} transition={{ duration: 0.5, delayChildren: 0.5 }} className='app__projects-cards app__flex'>
          {filteredProjects.slice(0, visibleProjectNumber).map((item, index) => (
            <div className='app__projects-card' key={index}>
              <div className='app__projects-card-row'>
                <img src={item.img} alt={`${item.name}Logo`}></img>
              </div>
              <div className='app__projects-card-row'>
                  <p className='app__project-card-name'>{item.name}</p>
                  {item.description}
                  <div className='app__projects-card-column'>
                    {item.tags && item.tags.map((tag, index) => (
                      <div key={`${item.name}_${tag}_${index}`} onClick={() => handleProjectFilter(tag)} className={`app__projects-card-tag ${tag === activeFilter ? 'app__project-card-tag-active-filter' : ''}`}>
                          <a href={`#projects`}>#{tag}</a>
                      </div>
                    ))}
                  </div>
                  <div className='app__projects-card-column'>
                    <span>
                      {item.website !== '' && (<a href={item.website} target="_blank" rel="noreferrer"><BiWorld /></a>)}
                      {item.github !== '' && (<a href={item.github} target="_blank" rel="noreferrer"><AiOutlineGithub /></a>)}
                      {item.youtube !== '' && (<a href={item.youtube} target="_blank" rel="noreferrer"><AiFillYoutube /></a>)}
                    </span>
                  </div>
              </div>
            </div>
          ))}
          {visibleProjectNumber < filteredProjects.length ? (
            <button onClick={() => setVisibleProjectNumber(visibleProjectNumber+3)}>Load More</button>
          ) : (
            <a href='https://github.com/AlessioLucciola' target='_blank' rel='noreferrer'><button>View More On GitHub</button></a>
          ) }
        </motion.div>
      </div>
      <SectionDivider />
    </>
  )
}

export default Projects