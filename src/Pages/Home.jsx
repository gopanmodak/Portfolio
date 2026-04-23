/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 py-20 px-5">

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="border border-blue-500/20 rounded-3xl px-4 py-2 inline-block mt-10 bg-gradient-to-r from-blue-500/10 to-cyan-500/10"
        >
          <h2 className="text-blue-400 font-semibold text-md">
            Welcome to my portfolio
          </h2>
        </motion.span>

        {/* Title */}
        <h1 className="font-bold text-white text-3xl md:text-4xl lg:text-6xl max-w-2xl mt-5 leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-green-400 text-transparent bg-clip-text animate-gradient bg-[300%]">
            Gopan Kumer Modak
          </span>
        </h1>

        {/* Role */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-2xl mt-5 font-semibold text-blue-400"
        >
          MERN Stack Developer
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-400 text-lg max-w-xl mt-5"
        >
          I build modern, fast, and scalable web applications with cutting-edge
          technologies. Transforming ideas into elegant digital experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-5 flex gap-5 flex-wrap"
        >
          {/* Hire Me */}
          <a
            href="#contact"
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium flex items-center gap-2 hover:scale-105 transition"
          >
            Hire Me <FaArrowRight />
          </a>

          {/* Projects */}
          <a
            href="#projects"
            className="py-3 text-white bg-gray-800 px-6 hover:bg-gray-700 rounded-xl flex items-center gap-2 hover:scale-105 transition"
          >
            View Projects <AiOutlineDownload />
          </a>
        </motion.div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 rounded-full"></div>

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="border border-blue-500/20 rounded-full p-5 relative"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnopuL3YNupxeGzEyo_SUy-gCcS_3RFYP9YA&s"
            alt="profile"
            className="border border-blue-500/20 rounded-full p-5"
          />
        </motion.div>
      </motion.div>

    </div>
  );
};

export default Home;