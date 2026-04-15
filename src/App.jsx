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

      <section id="home"  className='bg-linear-to-b from-black to-gray-900'>
        <Home/>
      </section>

      <section id="about" className='py-20'>
        <About/>
      </section>

      <section id="skills" className='py-20'>
        <Skills/>
      </section>

      <section id="projects" className='py-20'>
       <Projects />
      </section>

      <section id="experience" className='py-20'>
        <Experience/>
      </section>

      <section id="contact" className='py-20'>
        <Contact />
      </section>
    </div>
  )
}

export default App
