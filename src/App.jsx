import React from 'react'
import Header from './components/Header'
import Landing from './components/Landing'
import FooterComp from './components/FooterComp'
import About from './components/About';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import Expirience from './components/Expirience';
import { motion, useScroll } from "framer-motion"



function App() {
  
  const { scrollYProgress } = useScroll();
  
  return (
    <div style={{backgroundImage: `url("./images/bg1.jpg")`}}>
      <motion.div style={{ scaleX: scrollYProgress }} />  
      <header>
        <Header />
      </header>
      <section className='bin-h-screen pt-9'>
        <Landing />
        <About />
        <Skills />
        <Expirience />
        <Contacts />
      </section>
      <footer>
        <FooterComp />
      </footer>
    </div>
  );
}

export default App;
