import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { SectionDivider } from '../../components';
import { images } from '../../constants';
import { BiWorld } from 'react-icons/bi';
import { AiOutlineGithub, AiFillYoutube, AiFillDelete } from 'react-icons/ai';

const Projects = () => {
  const allProjects = [
    {name: 'Skin Lesion Classification', description: "Deep Learning Skin Lesion Classification using CNN, ViT and MSLANet", img: images.melanoma, tags: ['Python', 'Deep Learning', 'Pytorch', 'CNN', 'Vision Transformers', 'StyleGAN'], website: '', github: 'https://github.com/AlessioLucciola/skin-lesion-classification', youtube: 'https://www.youtube.com/watch?v=e2cvE8xIPBc&ab_channel=AlessioLucciola'},
    {name: 'SmartSupply', description: "DApp built using the Blockchain to fight fake products on the web", img: images.smartsupply, tags: ['Solidity', 'Typescript', 'Hardhat', 'Ethereum', 'Express', 'Docker', 'ReactJS', 'Prisma'], website: '', github: 'https://github.com/AlessioLucciola/blockchain-and-distributed-ledger-project', youtube: 'https://www.youtube.com/watch?v=Jb_NyqDaF1o&ab_channel=AlessioLucciola'},
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

  const [visibleProjectNumber, setVisibleProjectNumber] = useState(10);
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
      <div className='app-container'>
        <h2 className='head-text'>Projects.</h2>
        {activeFilter !== null ? (
          <div className='flex flex-row mb-3 text-center text-md align-center gap-1 cursor-pointer p-2 bg-[--secondary-color] border-2 border-[--secondary-color] text-white duration-300 rounded-xl hover:bg-[--white-color] hover:border-[--red-color] hover:text-[--red-color]' onClick={() => handleRemoveProjectFilter()}>
            <span className='text-xl'>
              <AiFillDelete />
            </span>
            <span>
              Active filter:
            </span>
            <span>
              {activeFilter}
            </span>
          </div>
        ) : (
          ''
        )}
        <motion.div animate={animateCard} transition={{ duration: 0.5, delayChildren: 0.5 }} className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center gap-5 mb-5'>
          {filteredProjects.slice(0, visibleProjectNumber).map((item, index) => (
            <div className='app-section flex flex-col' key={index}>
              <div className='flex flex-col justify-center items-center gap-1 w-[90%] mx-auto'>
                <img src={item.img} alt={`${item.name}-logo`} className='w-20 rounded-xl'></img>
                <p className='sub-head-text'>{item.name}</p>
              </div>
              <div className='flex flex-col gap-2 text-center'>
                  {item.description}
                  <div className='flex flex-wrap gap-1 justify-center'>
                    {item.tags && item.tags.map((tag, index) => (
                      <div key={`${item.name}_${tag}_${index}`} onClick={() => handleProjectFilter(tag)} className={`${tag === activeFilter ? 'p-1 bg-[--white-color] text-[--secondary-color] border-2 border-[--secondary-color] rounded-xl' : 'app-button'}`}>
                          <a href={`#projects`}>#{tag}</a>
                      </div>
                    ))}
                  </div>
                  <div className='flex flex-row text-3xl gap-2 mx-auto'>
                    <span className='duration-300 hover:text-[--secondary-color]'>
                      {item.website !== '' && (<a href={item.website} target="_blank" rel="noreferrer"><BiWorld /></a>)}
                    </span>
                    <span className='duration-300 hover:text-[--secondary-color]'>
                      {item.github !== '' && (<a href={item.github} target="_blank" rel="noreferrer"><AiOutlineGithub /></a>)}
                    </span>
                    <span className='duration-300 hover:text-[--secondary-color]'>
                      {item.youtube !== '' && (<a href={item.youtube} target="_blank" rel="noreferrer"><AiFillYoutube /></a>)}
                    </span>
                  </div>
              </div>
            </div>
          ))}
        </motion.div>
        {visibleProjectNumber < filteredProjects.length ? (
            <button className='app-button w-full h-[3rem]' onClick={() => setVisibleProjectNumber(visibleProjectNumber+3)}>
              Load More
            </button>
          ) : (
            <button className='app-button w-full h-[3rem]'>
              <a href='https://github.com/AlessioLucciola' target='_blank' rel='noreferrer'>
                View More On GitHub
              </a>
            </button>
        ) }
      </div>
      <SectionDivider />
    </>
  )
}

export default Projects