import React from 'react'
import profile from "../assets/Ahnaf Tahmid.png";

const AboutTwo = () => {
  return (
    <section className="w-full min-h-screen bg-gray-50 text-gray-800 py-20">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      
      {/* Profile Image */}
      <div className="flex justify-center md:justify-start">
        <img
          src={profile}
          alt="Profile"
          className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-lg border-4 border-blue-500"
        />
      </div>

      {/* About Text */}
      <div>
        <h2 className="text-4xl font-bold mb-6 text-blue-500">About Me</h2>
        <p className="text-gray-700 mb-4 leading-relaxed text-base sm:text-lg">
          Hi! I’m <span className="font-semibold">Ahnaf Tahmid</span>, a passionate
          Front-End Developer from Bangladesh. I specialize in building
          responsive and interactive websites using modern web technologies like
          React, Tailwind CSS, and JavaScript.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed text-base sm:text-lg">
          I enjoy turning creative ideas into functional, visually appealing
          websites. My focus is on clean, maintainable code, user experience,
          and making sure websites are fully responsive on all devices.
        </p>
        <p className="text-gray-700 mb-6 leading-relaxed text-base sm:text-lg">
          In my free time, I explore new frontend technologies, contribute to
          open source projects, and continuously learn to improve my skills.
        </p>

        {/* Optional Fun Facts or Skills Highlights */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-white shadow-md p-4 rounded-lg text-center">
            <h3 className="font-semibold text-lg text-blue-500">Experience</h3>
            <p className="text-gray-700 mt-2">2+ Years</p>
          </div>
          <div className="bg-white shadow-md p-4 rounded-lg text-center">
            <h3 className="font-semibold text-lg text-blue-500">Projects</h3>
            <p className="text-gray-700 mt-2">10+ Completed</p>
          </div>
          <div className="bg-white shadow-md p-4 rounded-lg text-center">
            <h3 className="font-semibold text-lg text-blue-500">Languages</h3>
            <p className="text-gray-700 mt-2">HTML, CSS, JS</p>
          </div>
          <div className="bg-white shadow-md p-4 rounded-lg text-center">
            <h3 className="font-semibold text-lg text-blue-500">Frameworks</h3>
            <p className="text-gray-700 mt-2">React, Tailwind</p>
          </div>
        </div>
      </div>

    </div>
  </section>
  )
}

export default AboutTwo