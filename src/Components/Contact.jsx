import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import CV from "../assets/CV_Ahnaf Tahmid.pdf"; // 📝 place your CV in src/assets/

const Contact = () => {
  return (
    <section id="contact" className="w-full py-20 bg-gray-50 text-gray-800">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-10 text-blue-500">
          Contact <span className="text-gray-800">Me</span>
        </h2>

        {/* Contact Info */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <FaEnvelope className="text-blue-500 text-3xl mb-3" />
            <h3 className="font-semibold text-lg">Email</h3>
            <p className="text-gray-600">ahnaf.ent@gmail.com</p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <FaPhoneAlt className="text-blue-500 text-3xl mb-3" />
            <h3 className="font-semibold text-lg">Phone</h3>
            <p className="text-gray-600">+8801689940198</p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <FaMapMarkerAlt className="text-blue-500 text-3xl mb-3" />
            <h3 className="font-semibold text-lg">Location</h3>
            <p className="text-gray-600">Halima Monzil 35/11, Zohuri Moholla, Shaymoli, Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-8 text-2xl text-gray-700 mb-10">
          <a href="https://github.com/ahnaftahmid" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/ahnaftahmid" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            <FaLinkedin />
          </a>
        </div>

        {/* Download CV Button */}
        <a
          href={CV}
          download="Ahnaf-Tahmid-CV.pdf"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Contact;
