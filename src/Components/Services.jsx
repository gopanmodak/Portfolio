import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const myServices = [
  {
    title: "Web Development",
    image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    description:
      "Building responsive, performant web applications using modern frameworks and best practices.",
    skills: [
      "React & Next.js",
      "Node.js & Express",
      "Database Design",
      "API Development",
    ],
  },
  {
    title: "UI/UX Design",
    image: "https://cdn-icons-png.flaticon.com/512/17109/17109606.png",
    description:
      "Creating beautiful, intuitive user interfaces that provide exceptional user experiences.",
    skills: [
      "Responsive Design",
      "Wireframing",
      "Prototyping",
      "User Research",
    ],
  },
  {
    title: "API Integration",
    image: "https://cdn-icons-png.flaticon.com/512/906/906334.png",
    description:
      "Seamlessly integrating third-party services and APIs to extend application functionality.",
    skills: ["REST APIs", "GraphQL", "Payment Gateways", "Cloud Services"],
  },
];

const Services = () => {
  return (
    <div>
      {/* Heading Animation */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-md font-bold bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
      >
        What I Offer
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mt-2"
      >
        My Services
      </motion.h1>

      <div className="flex justify-center mt-4">
        <span className="block w-40 border-b-4 border-blue-400 rounded-full"></span>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 p-3 py-10">
        {myServices.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-linear-to-br from-[#111827] to-[#0f172a] p-6 rounded-lg shadow-[0_20px_60px_rgba(0,255,255,0.2)]"
          >
            {/* Image */}
            <motion.div
              className="flex justify-center mb-4"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-16 h-16 object-contain"
              />
            </motion.div>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-2 text-center">
              {service.title}
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-md my-5">
              {service.description}
            </p>

            {/* Skills */}
            <ul className="list-disc list-inside mt-4 space-y-2">
              {service.skills.map((skill, skillIndex) => (
                <motion.li
                  key={skillIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: skillIndex * 0.1 }}
                  className="text-gray-100 text-sm font-semibold marker:text-blue-500"
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;