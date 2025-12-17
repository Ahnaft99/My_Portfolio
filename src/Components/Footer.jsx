import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "project" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-[#111827] text-gray-300 pt-12">
      <div className="w-11/12 lg:w-10/12 mx-auto">
        {/* Top */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 border-b border-gray-700 pb-8">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white">
              AHNAF<span className="text-cyan-400">.</span>
            </h2>
            <p className="mt-3 text-sm max-w-xs">
              Front-end developer crafting clean, modern & responsive web
              experiences.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h3 className="text-white font-semibold">Quick Links</h3>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="hover:text-cyan-400 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h3 className="text-white font-semibold">Follow Me</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/Ahnaft99"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-600 rounded-full hover:bg-white hover:text-black transition-all"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ahnaf-tahmid-448945320/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-600 rounded-full hover:bg-white hover:text-black transition-all"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.facebook.com/ahnaf.tahmid.733/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-600 rounded-full hover:bg-white hover:text-black transition-all"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/theahnaftahmid/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-600 rounded-full hover:bg-white hover:text-black transition-all"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center py-6 text-sm text-gray-400">
          © {new Date().getFullYear()} Ahnaf Tahmid. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
