import React from "react";
import { FaGithub, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF, FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted!");
  };
  return (
    <section className="p-5">
      <p className="text-md font-bold bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
        Get in Touch
      </p>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mt-2">
        Contact Me
      </h1>

      <div className="flex justify-center mt-4">
        <span className="block w-24 border-b-4 border-blue-400 rounded-full"></span>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mt-12 max-w-7xl mx-auto">
        <div className="space-y-5">
          <h3 className="text-2xl font-semibold text-gray-100">Let's Talk</h3>

          <p className="text-gray-400 text-lg">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div className="flex gap-5 group hover:scale-95 transition-all duration-300 cursor-pointer items-center mt-10">
            <div className="bg-blue-400 p-2 rounded-lg w-12 flex justify-center items-center shadow-[0_2px_3px_#22d3ee]">
              <MdEmail className="text-2xl text-white" />
            </div>

            <div className="text-gray-400">
              <p>Email</p>
              <p className="text-white text-md group-hover:text-blue-500 transition-all duration-300">
                gopanhridoy@gmail.com
              </p>
            </div>
          </div>

          <div className="flex gap-5 group hover:scale-95 transition-all duration-300 cursor-pointer items-center">
            <div className="bg-blue-400 p-2 rounded-lg w-12 flex justify-center items-center shadow-[0_2px_3px_#22d3ee]">
              <FaPhoneAlt className="text-2xl text-white" />
            </div>

            <div className="text-gray-400">
              <p>Phone</p>
              <p className="text-white text-md group-hover:text-blue-500 transition-all duration-300">
                +8801709200099
              </p>
            </div>
          </div>

          <div className="flex gap-5 group hover:scale-95 transition-all duration-300 cursor-pointer items-center">
            <div className="bg-blue-400 p-2 rounded-lg w-12 flex justify-center items-center shadow-[0_2px_3px_#22d3ee]">
              <FaLocationDot className="text-2xl text-white" />
            </div>

            <div className="text-gray-400">
              <p>Location</p>
              <p className="text-white text-md group-hover:text-blue-500 transition-all duration-300">
                Dhaka, Bangladesh
              </p>
            </div>
          </div>

          <div className="flex gap-5 mt-10">
            <a
              href="https://github.com/gopanmodak"
              target="blank"
              className="bg-gray-700 p-2 rounded-lg hover:bg-blue-600 hover:scale-105 transition-all duration-300"
            >
              <FaGithub className="text-2xl text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/gopan-modak/"
              target="blank"
              className="bg-gray-700 p-2 rounded-lg hover:bg-blue-600 hover:scale-105 transition-all duration-300"
            >
              <FaLinkedinIn className="text-2xl text-white" />
            </a>
            <a
              href="https://www.facebook.com/im.gopan"
              target="blank"
              className="bg-gray-700 p-2 rounded-lg hover:bg-blue-600 hover:scale-105 transition-all duration-300"
            >
              <FaFacebookF className="text-2xl text-white" />
            </a>
          </div>
        </div>

        <div
          className="
          bg-linear-to-r from-[#111827] to-[#0f172a]
          p-8 rounded-2xl border border-white/10 backdrop-blur-sm
          shadow-[0_20px_50px_0_rgba(0,255,255,0.2)]
          transition-all duration-300"
        >
          <form
            action=""
            className="flex flex-col gap-5"
            onSubmit={handleFormSubmit}
          >
            <label htmlFor="name" className="text-gray-300">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="input input-info w-full p-6 rounded-2xl"
              required
            />

            <label htmlFor="email" className="text-gray-300">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="input input-info w-full p-6 rounded-2xl"
              required
            />

            <label htmlFor="message" className="text-gray-300">
              Your Message
            </label>
            <textarea
              id="message"
              className="textarea textarea-info w-full p-10 rounded-2xl"
              placeholder="Write your message..."
            ></textarea>

            <button className="btn text-gray-100 font-bold text-md btn-info hover:scale-95 transition-all duration-300 ">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
