import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
  return (
   <div  className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 py-20 px-5">
    <div>
      <span className="border  border-blue-500/20 rounded-3xl px-4 py-2 inline-block mt-10 bg-linear-to-r from-blue-500/10 to-cyan-500/10">
        <h2 className="text-blue-400 font-semibold text-xl">
          Welcome to my portfolio
        </h2>
      </span>

      <h1 className="font-bold text-white text-3xl md:text-4xl lg:text-6xl max-w-2xl mt-5 leading-tight">
        Hi, I'm {''}
         <span className=" font-bold bg-linear-to-r from-cyan-400 via-blue-400 to-green-400 text-transparent bg-clip-text animate-gradient bg-300%">
          Gopan Kumer Modak
        </span>
      </h1>
      <h1 className="text-2xl mt-5 font-semibold text-blue-400">
        MERN Stack Developer
      </h1>
      <p className="text-gray-400 text-lg max-w-lg mt-5">
        I build modern, fast, and scalable web applications with cutting-edge
        technologies. Transforming ideas into elegant digital experiences
      </p>

      <div className="mt-5 flex gap-5">
        <div>
          <a
            href="#contact"
            class="px-4 md:px-6 py-4 relative rounded group font-medium text-white  inline-block"
          >
            <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-linear-to-br from-purple-600 to-blue-500"></span>
            <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-linear-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
            <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-linear-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
            <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-linear-to-br to-purple-600 from-blue-500"></span>
            <span class="relative flex items-center gap-2">
              Hire Me{" "}
              <span>
                <FaArrowRight />
              </span>
            </span>
          </a>
        </div>

        <div>
          <a
            href="#projects"
            class="py-4 text-lg text-white bg-gray-800 px-7 hover:bg-gray-700 rounded-xl flex items-center gap-2"
          >
            View Projects{" "}
            <span>
              <AiOutlineDownload />
            </span>
          </a>
        </div>
      </div>

    </div>

    <div className="animate-bounce border border-blue-500/20 rounded-full p-5">

      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnopuL3YNupxeGzEyo_SUy-gCcS_3RFYP9YA&s" alt="" className="border border-blue-500/20 rounded-full p-5"/>
    </div>
   </div>
  );
};

export default Home;
