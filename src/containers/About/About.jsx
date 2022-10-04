import React from 'react';

import { images } from '../../constants';
import { SectionDivider } from '../../components';
import './About.scss';

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

  return (
    <>
      <a id='about' />
      <div className='app__about'>
        <h2 className='head-text'>About Me.</h2>
        <div className='app__about-inner'>
          <div className='app__about-row'>
            <div className='app__about-column'>
              <p className='highlight-text-title'>Hi.</p>
            </div>
            <div className='app__about-column'>
              <p>I'm <span className='highlight-text'>Alessio</span>, a {getAge()}-year-old <span className='highlight-text'>Software Engineer</span> from Italy.<br/>
                From an early age I’ve always been deeply interested in computing, in fact I've got a <span className='highlight-text'>Computer Science Bachelor's Degree</span> in March 2022 and I'm currently getting a <span className='highlight-text'>Master's Degree</span> in Sapienza - University Of Rome.<br/>
                I'm particularly interested in developing <span className='highlight-text'>Web Applications</span> even though I'm always experimenting new technologies and tools in order to come out with cool projects (especially if they concern <span className='highlight-text'>AI</span>).
              </p>
            </div>
          </div>
          <div className='app__about-row'>
            <img src={images.me} alt='me' />
          </div> 
        </div>
      </div>
      <SectionDivider />
    </>
  )
}

export default About