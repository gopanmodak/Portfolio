import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Experience from './Pages/Experience';
import Contact from './Pages/Contact';

const App = () => {
  return (
    <div>
      <Navbar />

      <section id="home">
        <Home/>
      </section>

      <section id="about">
        <About/>
      </section>

      <section id="skills">
        <Skills/>
      </section>

      <section id="projects">
       <Projects />
      </section>

      <section id="experience">
        <Experience/>
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}

export default App
