import { motion } from "framer-motion";
import Ahnaf from '../assets/Ahnaf Tahmid.png'
import bg from '../assets/Background.jpg'

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          `url(${bg})`, 
          backgroundSize: "contain"
      }}
    >
      <div className="w-full h-full bg-black/60 flex items-center">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10 text-white">
          
          {/* Left Side (Text) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-lg mb-2 font-medium text-blue-400">
              Hello, I’m
            </h3>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ahnaf Tahmid
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Front-End Developer
            </h2>
            <p className="text-gray-200 mb-6 leading-relaxed">
              I build responsive, interactive, and visually appealing websites
              using modern web technologies like React, Tailwind, and JavaScript.
            </p>
            <a
              href="#projects"
              className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-lg font-medium"
            >
              View My Work
            </a>
          </motion.div>

          {/* Right Side (Profile Image) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <img
              src={Ahnaf} 
              alt="Profile"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-blue-500 shadow-lg object-cover bg-white"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
