import React from "react";
import ecomerce from '../assets/Ecommerce.png'
// You can add more projects here or replace images/links
const projectData = [
  {
    title: "E-Commerce",
    description: "A full-featured e-commerce website using React, Redux, and Firebase.",
    image: ecomerce, // replace with your screenshot
    demo: "https://cool-otter-a94c73.netlify.app/",
    github: "https://github.com/Ahnaft99/E-commerce-2",
  },
  {
    title: "E-commerce Website",
    description: "A full-featured e-commerce website using React, Redux, and Firebase.",
    image: "https://via.placeholder.com/400x250",
    demo: "#",
    github: "#",
  },
  {
    title: "To-Do App",
    description: "A simple and interactive To-Do app built with React and localStorage.",
    image: "https://via.placeholder.com/400x250",
    demo: "#",
    github: "#",
  },
  {
    title: "Blog Website",
    description: "A responsive blog website built with React and Markdown support.",
    image: "https://via.placeholder.com/400x250",
    demo: "#",
    github: "#",
  },
];

const ProjectData = () => {
  return (
    <section id="projects" className="w-full py-20 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-500">
          My <span className="text-gray-800">Projects</span>
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-medium transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectData;
