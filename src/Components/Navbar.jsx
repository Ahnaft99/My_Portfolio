import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // to highlight active link

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" }, // lowercase
    { name: "Contact", path: "/contact" },   // you can add Contact page later
  ];

  return (
    <nav className="fixed w-full bg-gray-600 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center py-4">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800">
          Tahmid<span className="text-blue-500">.</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`hover:text-blue-500 transition ${
                  location.pathname === link.path ? "text-blue-500 font-semibold" : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-2xl text-gray-700 cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center py-4 space-y-4 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={toggleMenu}
                  className={`hover:text-blue-500 transition ${
                    location.pathname === link.path ? "text-blue-500 font-semibold" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
