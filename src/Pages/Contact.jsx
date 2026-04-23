/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted!");
  };

  return (
    <section className="p-5">
      {/* Heading */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-md font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
      >
        Get in Touch
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mt-2"
      >
        Contact Me
      </motion.h1>

      <div className="flex justify-center mt-4">
        <span className="block w-24 border-b-4 border-blue-400 rounded-full"></span>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mt-12 max-w-7xl mx-auto">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-5"
        >
          <h3 className="text-2xl font-semibold text-gray-100">
            Let's Talk
          </h3>

          <p className="text-gray-400 text-lg">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          {/* Contact Items */}
          {[ 
            { icon: <MdEmail />, title: "Email", value: "gopanhridoy@gmail.com" },
            { icon: <FaPhoneAlt />, title: "Phone", value: "+8801709200099" },
            { icon: <FaLocationDot />, title: "Location", value: "Dhaka, Bangladesh" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="flex gap-5 cursor-pointer items-center mt-5"
            >
              <div className="bg-blue-400 p-2 rounded-lg w-12 flex justify-center items-center shadow-[0_2px_3px_#22d3ee] text-white text-2xl">
                {item.icon}
              </div>

              <div className="text-gray-400">
                <p>{item.title}</p>
                <p className="text-white text-md hover:text-blue-500 transition">
                  {item.value}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Social Icons */}
          <motion.div
            className="flex gap-5 mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            {[FaGithub, FaLinkedinIn, FaFacebookF].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="bg-gray-700 p-2 rounded-lg text-white text-2xl hover:bg-blue-600 transition"
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="
          bg-gradient-to-r from-[#111827] to-[#0f172a]
          p-8 rounded-2xl border border-white/10 backdrop-blur-sm
          shadow-[0_20px_50px_0_rgba(0,255,255,0.2)]
        "
        >
          <form
            className="flex flex-col gap-5"
            onSubmit={handleFormSubmit}
          >
            {/* Inputs */}
            {["name", "email"].map((field, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <label className="text-gray-300 capitalize">
                  Your {field}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  placeholder={`Enter your ${field}`}
                  className="w-full p-4 rounded-xl bg-black/30 border border-white/10 text-white focus:outline-none focus:border-blue-500"
                  required
                />
              </motion.div>
            ))}

            {/* Textarea */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label className="text-gray-300">Your Message</label>
              <textarea
                className="w-full p-4 rounded-xl bg-black/30 border border-white/10 text-white focus:outline-none focus:border-blue-500"
                placeholder="Write your message..."
              ></textarea>
            </motion.div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white font-bold py-3 rounded-xl hover:bg-blue-600 transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;