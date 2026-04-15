import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-black/30 border-b border-white/10 transition-all duration-300"'>
      <div className='flex max-w-7xl mx-auto justify-between px-6 py-4 '>
      <h2 className='bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-bold text-3xl'>Portfolio</h2>

      <nav className='flex gap-5 text-lg font-medium text-gray-300'>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
      </nav>


    </div>
    </div>
  )
}

export default Navbar