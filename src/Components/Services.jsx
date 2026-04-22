import React from "react";

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
      <p className="text-md font-bold bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
        What I Offer
      </p>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mt-2">
        My Services
      </h1>

      <div className="flex justify-center mt-4">
        <span className="block w-40 border-b-4 border-blue-400 rounded-full"></span>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 p-3 py-10">
        {myServices.map((service, index) => (
          <div
            key={index}
            className="bg-linear-to-br from-[#111827] to-[#0f172a] p-6 rounded-lg group hover:scale-95 transition-all duration-300 shadow-[0_20px_60px_rgba(0,255,255,0.2)]"
          >
            
            <div className="flex justify-center mb-4">
              <img
                src={service.image}
                alt={service.title}
                className="w-16 h-16 object-contain group-hover:scale-110 transition duration-300"
              />
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-2 group-hover:text-blue-500 transition-all duration-300 text-center">
              {service.title}
            </h2>

            <p className="text-gray-400 text-md my-5 ">
              {service.description}
            </p>

            <ul className="list-disc list-inside mt-4 space-y-2">
              {service.skills.map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  className="text-gray-100 text-sm font-semibold marker:text-blue-500"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;