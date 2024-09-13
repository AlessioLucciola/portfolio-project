import React from 'react';

import { About, Footer, Projects, Skills } from './containers';
import { Navbar, SocialMedia } from './components';

const App = () => {
  return (
    <div className="bg-[--primary-color] font-sans pb-[5rem]">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Footer />
      <SocialMedia />
    </div>
  )
}

export default App