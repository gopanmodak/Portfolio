import React from 'react'

const About = () => {
  return (
    <div>

      <div>
        <p className='text-md font-bold bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>Get to know me</p>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mt-2'>About Me</h1>
              <div className="flex justify-center mt-4">
          <span className="block w-25 border-b-3 border-b-blue-400"></span>
        </div>



        <div className='grid md:grid-cols-2 gap-10 mt-10 max-w-7xl mx-auto'>


          <div className='bg-linear-to-br from-[#111827] to-[#0f172a] p-8 rounded-2xl border border-white/10 backdrop-blur-sm my-5'>
            <h4 className='bg-linear-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent text-2xl'>Hello! I'm a MERN Stack Developer</h4>
            <div className='text-gray-300 mt-4 space-y-4 text-lg'>

              <p>Passionate developer with experience building scalable web applications using modern technologies. I specialize in creating seamless user experiences and robust backend solutions.</p>
            <p>My expertise spans across the full development stack, from crafting beautiful, responsive interfaces with React to architecting efficient server-side solutions with Node.js and MongoDB.</p>
            <p>I'm committed to writing clean, maintainable code and staying up-to-date with the latest industry trends and best practices.</p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default About