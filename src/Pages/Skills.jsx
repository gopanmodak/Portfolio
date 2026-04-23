import React, { useMemo } from "react";
import { motion } from "framer-motion";

// 1. Move data outside or memoize to prevent re-creation on renders
const SKILLS_DATA = [
  {
    title: "Frontend",
    skills: [
      { name: "React", value: 90 },
      { name: "JavaScript/TypeScript", value: 85 },
      { name: "Tailwind CSS", value: 90 },
      { name: "HTML/CSS", value: 95 },
      { name: "Next.js", value: 80 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", value: 85 },
      { name: "Express.js", value: 85 },
      { name: "MongoDB", value: 80 },
      { name: "REST APIs", value: 90 },
      { name: "PostgreSQL", value: 75 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git & GitHub", value: 90 },
      { name: "Docker", value: 70 },
      { name: "AWS", value: 75 },
      { name: "Firebase", value: 85 },
      { name: "Figma", value: 80 },
    ],
  },
];

const Skills = () => {
  return (
    <section className="py-16 px-5 max-w-7xl mx-auto" aria-labelledby="skills-heading">
      <header className="text-center mb-12">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-bold tracking-widest uppercase bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
        >
         What I Do

        </motion.p>

        <motion.h2
          id="skills-heading"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-white mt-3"
        >
          My Skills

        </motion.h2>

        <div className="flex justify-center mt-4">
          <span className="h-1 w-20 bg-blue-500 rounded-full" />
        </div>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS_DATA.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
            className="group bg-[#111827]/50 border border-white/10 p-8 rounded-3xl backdrop-blur-md hover:border-blue-500/50 transition-colors duration-500"
          >
            <h3 className="text-2xl font-bold text-blue-400 mb-8">
              {category.title}
            </h3>

            <div className="space-y-7">
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-gray-200 font-medium">{skill.name}</span>
                    <span className="text-md font-mono text-blue-400">{skill.value}%</span>
                  </div>

                  <div 
                    className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden"
                    role="progressbar"
                    aria-valuenow={skill.value}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500 bg-[length:200%_100%]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;