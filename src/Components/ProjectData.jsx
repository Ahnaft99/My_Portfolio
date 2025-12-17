import React from "react";
import { motion } from "framer-motion";
import ecomerce from "../assets/Ecommerce.png";
import Finsweet from "../assets/Finsweet.png";
import Landing from "../assets/Landing.png";
import Kacchi from "../assets/Kacchi.png";

const projectData = [
  {
    title: "E-Commerce",
    description: "A full-featured e-commerce website using React, Redux, and Context API.",
    image: ecomerce,
    demo: "https://cool-otter-a94c73.netlify.app/",
    github: "https://github.com/Ahnaft99/E-commerce-2",
  },
  {
    title: "Finsweet Website",
    description: "A full-featured website using React, Tailwind CSS, and JavaScript.",
    image: Finsweet,
    demo: "https://effortless-tulumba-f72aad.netlify.app/",
    github: "https://github.com/Ahnaft99/Finsweet",
  },
  {
    title: "Landing Page",
    description: "A simple landing page using Bootstrap.",
    image: Landing,
    demo: "https://startling-brigadeiros-82b571.netlify.app/",
    github: "https://github.com/Ahnaft99/realstatelandingpage",
  },
  {
    title: "Restaurant Website",
    description: "A website built with React and Tailwind CSS.",
    image: Kacchi,
    demo: "https://silly-mousse-475a4e.netlify.app/item",
    github: "https://github.com/Ahnaft99/kacchi",
  },
];

const ProjectData = () => {
  return (
    <section className="lg:py-20 py-10 bg-[#E0E0E0]">
      <div className="w-11/12 lg:w-10/12 mx-auto text-center">
        <h2 className="font-pops lg:font-extrabold font-bold text-black lg:text-[67px] md:text-[45px] text-[32px] opacity-75">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:mt-10 mt-5">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border hover:border-blue-400"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-lg text-gray-800">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {project.description}
                </p>

                <div className="flex justify-center gap-3 mt-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white bg-linear-to-r from-blue-500 to-cyan-400 px-4 py-2 rounded-full hover:shadow-lg"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold border border-gray-700 px-4 py-2 rounded-full hover:bg-black hover:text-white transition-all"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectData;
