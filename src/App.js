import React from 'react';
import { Helmet } from 'react-helmet';

import { About, Footer, Header, Projects, Skills } from './containers';
import { Navbar, SocialMedia } from './components';
import me from './assets/me.jpg';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Helmet>
        <title>Alessio Lucciola Portfolio</title>
        <meta name="description" content="I'm Alessio Lucciola, a 25-year-old Software Engineer from Italy. Since I was a child I have always had a profound interest in IT, in fact, I obtained a Bachelor's Degree in Computer Science in March 2022 and I am currently obtaining a Master's Degree in Sapienza - University of Rome. I am particularly interested in Web Application development although I am always experimenting with new technologies and tools to create interesting projects (especially if they concern AI)." />
        <meta property="og:title" content="Alessio Lucciola Portfolio" />
        <meta property="og:description" content="I'm Alessio Lucciola, a 25-year-old Software Engineer from Italy. Since I was a child I have always had a profound interest in IT, in fact, I obtained a Bachelor's Degree in Computer Science in March 2022 and I am currently obtaining a Master's Degree in Sapienza - University of Rome. I am particularly interested in Web Application development although I am always experimenting with new technologies and tools to create interesting projects (especially if they concern AI)." />
        <meta property="og:image" content={me} />
        <meta property="og:url" content="https://alessioluc.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Alessio Lucciola Portfolio" />
        <meta property="og:locale" content="en" />
        <meta name="twitter:title" content="Alessio Lucciola Portfolio" />
        <meta name="twitter:description" content="I'm Alessio Lucciola, a 25-year-old Software Engineer from Italy. Since I was a child I have always had a profound interest in IT, in fact, I obtained a Bachelor's Degree in Computer Science in March 2022 and I am currently obtaining a Master's Degree in Sapienza - University of Rome. I am particularly interested in Web Application development although I am always experimenting with new technologies and tools to create interesting projects (especially if they concern AI)." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={me} />
      </Helmet>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Footer />
      <SocialMedia />
    </div>
  )
}

export default App