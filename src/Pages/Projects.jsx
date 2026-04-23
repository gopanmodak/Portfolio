import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const Projects = () => {
  const projectData = [
    {
      title: "NEXTLEARN",
      desc: "NEXTLEARN is a modern online learning platform where users can explore and access a wide variety of courses and learning resources — all in one place",
      tags: ["React", "Node.js", "Tailwind", "Firebase"],
      img: "https://tse2.mm.bing.net/th/id/OIP.WONrGf2LdjVIRM4OxS_YCAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", // Project image link daw
      live: "#",
      github: "https://github.com/gopanmodak/NextLearn"
    },
    {
      title: "Xpressio",
      desc: "Xpressio is a modern, fast, and user-friendly e-commerce platform where fashion, electronics, and groceries—everything is available at great prices.",
      tags: ["React", "Express", "Firebase", "Tailwind"],
      img: "https://cdn.dribbble.com/userupload/8751653/file/original-84fe9f7b17b07cbcd17ef05d559c04cb.jpg?resize=1600x1200", 
      live: "https://xpressio.vercel.app/",
      github: "https://github.com/gopanmodak/Xpressio"
    },
    {
      title: "SkyWay",
      desc: "SkyWay is a travel booking platform that offers users a seamless experience to discover and book flights, hotels, and vacation packages worldwide.",
      tags: ["React", "Firebase", "Tailwind"],
      img: "https://photos.tripsite.com/assets/files/5297/type-bike-hotel.576x300-hidpi.webp",
      live: "#",
      github: "https://github.com/gopanmodak/SkyWay"
    }
  ];

  return (
    <section className="py-12 px-5 max-w-7xl mx-auto">
      {/* Heading Section */}
      <p className="text-md font-bold bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
        My Work
      </p>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mt-2">
        Featured Projects
      </h1>

      <div className="flex justify-center mt-4 mb-16">
        <span className="block w-40 border-b-4 border-blue-400 rounded-full"></span>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#111827] rounded-3xl overflow-hidden border border-white/5 hover:border-blue-500/20 transition-all duration-300 group"
          >
            {/* Image Section */}
            <div className="relative h-52 overflow-hidden">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#111827] via-transparent to-transparent opacity-80" />
            </div>

            {/* Content Section */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                {project.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons (Using SVGs) */}
              <div className="flex items-center gap-3">
                <a 
                  href={project.live}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl hover:opacity-90 transition-all text-sm"
                >
                  {/* Live Demo SVG Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  Live Demo
                </a>
                
                <a 
                  href={project.github}
                  className="p-3 bg-[#1f2937] text-white rounded-xl hover:bg-gray-700 transition-colors border border-white/5"
                >
                  {/* GitHub SVG Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects;