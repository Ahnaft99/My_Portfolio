import Ahnaf from "../assets/Ahnaf Tahmid.png"; // <-- your image

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-20 bg-gray-50 text-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <img
            src={Ahnaf}
            alt="Profile"
            className="w-72 h-72 md:w-96 md:h-96 rounded-2xl object-cover shadow-lg border-4 border-blue-500"
          />
        </div>

        {/* Right Side - Text */}
        <div>
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-blue-500">Me</span>
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Hi! I’m <span className="font-semibold">Ahnaf Tahmid</span>, a passionate 
            <span className="text-blue-500 font-semibold"> Front-End Developer</span> 
            from Bangladesh. I love transforming creative ideas into interactive, 
            user-friendly websites using React, JavaScript, and Tailwind CSS.
          </p>
          <p className="text-gray-700 mb-6">
            I focus on writing clean, maintainable code and ensuring responsive design 
            across all devices. My goal is to make the web beautiful, accessible, and 
            functional for everyone.
          </p>

          {/* Skills Section */}
         
        </div>

      </div>
    </section>
  );
};

export default About;
