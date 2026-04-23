import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { GiAchievement } from "react-icons/gi";
import { GoCode } from "react-icons/go";
import { SiBoosty } from "react-icons/si";

const About = () => {
  return (
    <section className="px-4 md:px-8">

      {/* Heading */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-md font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
      >
        Get to know me
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mt-2"
      >
        About Me
      </motion.h1>

      <div className="flex justify-center mt-4">
        <span className="block w-24 border-b-4 border-blue-400 rounded-full"></span>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mt-12 max-w-7xl mx-auto">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-[#111827] to-[#0f172a] 
          p-8 rounded-2xl border border-white/10 backdrop-blur-sm
          shadow-[0_20px_60px_rgba(0,255,255,0.2)]
          hover:shadow-[0_30px_80px_rgba(0,0,0,0.5)]
          transition-all duration-300"
        >
          <h4 className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent text-2xl font-semibold">
            Hello! I'm a MERN Stack Developer
          </h4>

          <div className="text-gray-300 mt-4 space-y-4 text-lg leading-relaxed">
            {[
              "Passionate developer with experience building scalable web applications using modern technologies.",
              "I specialize in creating seamless user experiences and robust backend solutions.",
              "My expertise spans across the full stack from React to Node.js and MongoDB.",
              "Committed to writing clean, maintainable code and staying updated with trends."
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE CARDS */}
        <div className="space-y-6">

          {[
            {
              icon: <GoCode />,
              value: "3+ Years",
              label: "Experience",
            },
            {
              icon: <GiAchievement />,
              value: "50+",
              label: "Completed Projects",
            },
            {
              icon: <SiBoosty />,
              value: "10+",
              label: "Technologies",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              
              className="bg-gradient-to-r from-[#111827] to-[#0f172a] 
              p-5 rounded-2xl border border-white/10 backdrop-blur-sm 
              flex items-center gap-5 
              shadow-[0_10px_30px_rgba(0,0,0,0.3)]
              hover:shadow-[0_20px_60px_rgba(0,255,255,0.2)]
              transition-all duration-300 hover:scale-105"
            >
              <motion.div
                
                className="bg-gradient-to-r from-blue-500 to-cyan-600 p-3 rounded-2xl text-6xl text-white"
              >
                {item.icon}
              </motion.div>

              <div>
                <h2 className="text-3xl text-white font-bold">
                  {item.value}
                </h2>
                <p className="text-gray-300 mt-2">{item.label}</p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default About;