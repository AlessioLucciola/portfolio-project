import React, { useEffect } from 'react';

import { About, Footer, Header, Projects, Skills } from './containers';
import { Navbar, SocialMedia } from './components';
import './App.scss';

const App = () => {
  return (
    <div className="app">
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