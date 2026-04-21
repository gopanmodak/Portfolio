import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Experience from './Pages/Experience';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';

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

      <section id="contact" className='bg-linear-to-r from-blue-900/20 to-cyan-900/10 py-20'>
        <Contact />
      </section>
      <div id="contact" className='border-t-2 border-t-amber-50/20 py-8'>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App
