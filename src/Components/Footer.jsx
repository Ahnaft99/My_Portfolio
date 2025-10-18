import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo / Name */}
        <div className="text-white text-2xl font-bold">
          Tahmid<span className="text-blue-500">.</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-gray-300 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-500 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-blue-500 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-6 text-gray-300 text-xl">
          <a
            href="https://github.com/Ahnaft99"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:ahnaf.ent@gmail.com"
            className="hover:text-blue-500 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-6"></div>

      {/* Copyright */}
      <p className="text-center text-gray-500 mt-4 text-sm">
        &copy; {new Date().getFullYear()} Ahnaf Tahmid. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
