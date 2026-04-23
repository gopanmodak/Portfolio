import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Experience = () => {
  const data = [
    {
      title: "Application Engineer",
      place: "TechSpark It Solution",
      duration: "2026 - Present",
      desc: "Developing scalable e-commerce solutions.",
    },
    
    {
      title: "Intern Developer",
      place: "Dream 71",
      duration: "2025",
      desc: "Assisted in building responsive web applications and learned industry best practices.",
    },
    {
      title: "Bachelor of Computer Science",
      place: "Independent University, Bangladesh",
      duration: "2020 - 2025",
      desc: "Graduated with honors. Focus on software engineering and web technologies.",
    },
  ];

  return (
    <section className="py-16 px-5 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-md font-bold bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          My Journey
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Experience & Education
        </h1>
      </div>

      <div className="relative">
        {/* Center Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-500/30 hidden md:block"></div>

        {data.map((item, index) => (
          <div
            key={index}
            className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} flex-col-reverse`}
          >
            {/* Empty space for alignment */}
            <div className="w-full md:w-5/12"></div>

            {/* Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-20 h-4 bg-blue-500 rounded-full border-2 border-[#0a0a0a] z-10 hidden md:block">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRodDFUP8JHtrqfkgVULn47lUytplCq0fGXHw&s"
                alt="" className="rounded-md"
              />
            </div>

            {/* Content Card */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="w-full md:w-5/12 bg-[#111827] p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all"
            >
              <span className="text-xs font-bold text-blue-400">
                {item.duration}
              </span>
              <h3 className="text-xl font-bold text-white mt-2">
                {item.title}
              </h3>
              <p className="text-blue-300 font-medium mb-2">{item.place}</p>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
