import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-black/30 border-b border-white/10 transition-all duration-300'>
      
      <div className='flex max-w-7xl mx-auto justify-between items-center px-6 py-4'>
        
        {/* LOGO */}
        <h2 className='bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-bold text-2xl md:text-3xl'>
          Portfolio
        </h2>

       
        <nav className='hidden md:flex gap-6 text-md font-medium text-gray-300'>
          <a href="#home" className='hover:text-white'>Home</a>
          <a href="#about" className='hover:text-white'>About</a>
          <a href="#skills" className='hover:text-white'>Skills</a>
          <a href="#projects" className='hover:text-white'>Projects</a>
          <a href="#contact" className='hover:text-white'>Contact</a>
          <a href="#experience" className='hover:text-white'>Experience</a>
        </nav>

        
        <div className='md:hidden text-white text-2xl cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

     
      {isOpen && (
        <div className='md:hidden bg-black/90 backdrop-blur-lg px-6 pb-5'>
          <nav className='flex flex-col gap-4 text-gray-300'>
            <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" onClick={() => setIsOpen(false)}>About</a>
            <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
            <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
          </nav>
        </div>
      )}
    </div>
  )
}

export default Navbar