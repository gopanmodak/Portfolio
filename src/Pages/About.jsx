import React from "react";
import { GiAchievement } from "react-icons/gi";
import { GoCode } from "react-icons/go";
import { SiBoosty } from "react-icons/si";

const About = () => {
  return (
    <section className="px-4 md:px-8">
      
      <p className="text-md font-bold bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
        Get to know me
      </p>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mt-2">
        About Me
      </h1>

      <div className="flex justify-center mt-4">
        <span className="block w-24 border-b-4 border-blue-400 rounded-full"></span>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mt-12 max-w-7xl mx-auto">

        <div className="bg-linear-to-br from-[#111827] to-[#0f172a] 
        p-8 rounded-2xl border border-white/10 backdrop-blur-sm
        shadow-[0_20px_60px_rgba(0,255,255,0.2)
        hover:shadow-[0_30px_80px_rgba(0,0,0,0.5)]
        transition-all duration-300">

          <h4 className="bg-linear-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent text-2xl font-semibold">
            Hello! I'm a MERN Stack Developer
          </h4>

          <div className="text-gray-300 mt-4 space-y-4 text-lg leading-relaxed">
            <p>
              Passionate developer with experience building scalable web
              applications using modern technologies. I specialize in creating
              seamless user experiences and robust backend solutions.
            </p>

            <p>
              My expertise spans across the full development stack, from
              crafting beautiful, responsive interfaces with React to
              architecting efficient server-side solutions with Node.js and MongoDB.
            </p>

            <p>
              I'm committed to writing clean, maintainable code and staying
              up-to-date with the latest industry trends and best practices.
            </p>
          </div>
        </div>

        <div className="space-y-6">

          <div className="bg-linear-to-r from-[#111827] to-[#0f172a] 
          p-5 rounded-2xl border border-white/10 backdrop-blur-sm 
          flex items-center gap-5 
          shadow-[0_10px_30px_rgba(0,0,0,0.3)]
          hover:scale-105 
          hover:shadow-[0_20px_60px_rgba(0,255,255,0.2)]
          transition-all duration-300">

            <GoCode className="bg-linear-to-r from-blue-500 to-cyan-600 p-3 rounded-2xl text-6xl text-white" />

            <div>
              <h2 className="text-3xl text-white font-bold">3+ Years</h2>
              <p className="text-gray-300 mt-2">Experience</p>
            </div>
          </div>

          <div className="bg-linear-to-r from-[#111827] to-[#0f172a] 
          p-5 rounded-2xl border border-white/10 backdrop-blur-sm 
          flex items-center gap-5 
          shadow-[0_10px_30px_rgba(0,0,0,0.3)]
          hover:scale-105 
          hover:shadow-[0_20px_60px_rgba(0,255,255,0.2)]
          transition-all duration-300">

            <GiAchievement className="bg-linear-to-r from-blue-500 to-cyan-600 p-3 rounded-2xl text-6xl text-white" />

            <div>
              <h2 className="text-3xl text-white font-bold">50+</h2>
              <p className="text-gray-300 mt-2">Completed Projects</p>
            </div>
          </div>

          <div className="bg-linear-to-r from-[#111827] to-[#0f172a] 
          p-5 rounded-2xl border border-white/10 backdrop-blur-sm 
          flex items-center gap-5 
          shadow-[0_10px_30px_rgba(0,0,0,0.3)]
          hover:scale-105 
          hover:shadow-[0_20px_60px_rgba(0,255,255,0.2)]
          transition-all duration-300">

            <SiBoosty className="bg-linear-to-r from-blue-500 to-cyan-600 p-3 rounded-2xl text-6xl text-white" />

            <div>
              <h2 className="text-3xl text-white font-bold">10+</h2>
              <p className="text-gray-300 mt-2">Technologies</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;