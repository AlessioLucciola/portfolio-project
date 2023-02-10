import React, { useState } from 'react';

import { SectionDivider } from '../../components';
import { images } from '../../constants';
import { BiWorld } from 'react-icons/bi';
import { AiOutlineGithub } from 'react-icons/ai';
import './Projects.scss';

const Projects = () => {
  const allProjects = [
    {name: 'GeneroCity', description: 'I took part in an internship with GamificationLab, a "Sapienza University of Rome" laboratory that deals with the design and development of web applications. I worked mainly on the development of new APIs for a smart parking application called GeneroCity, using Go programming language.', img: images.generocity, tags: ['Mobile App', 'Backend', 'Golang', 'PostgreSQL'], website: 'https://www.generocity.it/', github: ''},
    {name: 'BiometricBites', description: 'Web application that allows biometric access to the university cafeteria with face recognition. The frontend is developed with ReactJS, the backend with Django.', img: images.biometricbites, tags: ['Web App', 'Face Recognition', 'Typescript', 'ReactJS', 'SCSS', 'Django', 'Python', 'MySQL'], website: '', github: 'https://github.com/AlessioLucciola/BiometricBites'},
    {name: 'Machine Learning Model for Stroke Prediction', description: 'Homeworks for the master\'s degree in Computer Science course "Fundamentals of Data Science" at the University of Rome "La Sapienza" that consisted in creating a machine learning model for predicting strokes.', img: images.strokeprediction, tags: ['Machine Learning', 'Python'], website: '', github: 'https://github.com/AlessioLucciola/fundamentals-of-data-science'},
    {name: 'Q-Learning Routing Protocol for Drones', description: 'Homeworks for the master\'s degree in Computer Science course "Autonomous Networking" at the University of Rome "La Sapienza" that consisted in implementing a routing protocol for UAV ad-hoc wireless networks using Q-learning.', img: images.autonomousnetworking, tags: ['Reinforcement Learning', 'Python'], website: '', github: 'https://github.com/AlessioLucciola/autonomous-networking'},
    {name: 'Lucciola Legnami', description: 'I build the website of a lumber store using mainly ReactJS (for frontend) and PHP (for backend). The website shows overall information about the website and the sold products. Users are able to ask for online quotes. Admins have a private area in which they can manage the website functionalities (More info on Github).', img: images.lucciolalegnami, tags: ['Web App', 'Javascript', 'ReactJS', 'SCSS', 'Bootstrap', 'PHP', 'MySQL'], website: 'https://www.lucciolalegnami.it/', github: 'https://github.com/AlessioLucciola/lucciolalegnami-project'},
    {name: 'MiniBabelNet', description: 'BabelNet is a multilingual linguistic resource that aggregates lexicographic and encyclopedic information from heterogeneous resources in different languages ​​into a single semantic network (More info on GitHub). miniBabelNet represents a reduced and simplified version of BabelNet that consists in: A system for loading and storing text documents, a measure of lexical similarity between words in the miniBabelNet network, a measure of semantic similarity between concepts (synset) in the miniBabelNet network, the implementation of a similarity measure between documents. The whole project is developed in Java.', img: images.babel, tags: ['Java'], website: '', github: 'https://github.com/AlessioLucciola/babelarity-project'},
    {name: 'QuizArt', description: 'Human Computer Interaction project in which I designed an Android application from scratch, starting from need finding up to prototyping (using MarvelApp) and final testing with users.', img: images.quizart, tags: ['Marvel App'], website: '', github: 'https://github.com/AlessioLucciola/QuizArt-app-per-beni-culturali'},
    {name: 'Portfolio', description: 'Personal portfolio built using ReactJS.', img: images.logo, tags: ['Javascript', 'ReactJS', 'SCSS'], website: '', github: 'https://github.com/AlessioLucciola/portfolio-project'},
  ];

  const [visibleProjectNumber, setVisibleProjectNumber] = useState(3);

  return (
    <>
      <a id='projects' />
      <div className='app__projects'>
        <h2 className='head-text'>Projects.</h2>
        <div className='app__projects-cards app__flex'>
          {allProjects.slice(0, visibleProjectNumber).map((item, index) => (
            <div className='app__projects-card' key={index}>
              <div className='app__projects-card-row'>
                <img src={item.img} alt={`${item.name}Logo`}></img>
              </div>
              <div className='app__projects-card-row'>
                  <p className='app__project-card-name'>{item.name}</p>
                  {item.description}
                  <div className='app__projects-card-column'>
                    {item.tags && item.tags.map(tag => (
                      <div className='app__projects-card-tag'>
                        <span>
                          #{tag}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className='app__projects-card-column'>
                    <span>
                      {item.website !== '' && (<a href={item.website} target="_blank" rel="noreferrer"><BiWorld /></a>)}
                      {item.github !== '' && (<a href={item.github} target="_blank" rel="noreferrer"><AiOutlineGithub /></a>)}
                    </span>
                  </div>
              </div>
            </div>
          ))}
          {visibleProjectNumber < allProjects.length ? (
            <button onClick={() => setVisibleProjectNumber(visibleProjectNumber+3)}>Load More</button>
          ) : (
            <a href='https://github.com/AlessioLucciola' target='_blank' rel='noreferrer'><button>View More On GitHub</button></a>
          ) }
        </div>
      </div>
      <SectionDivider />
    </>
  )
}

export default Projects