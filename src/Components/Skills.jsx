import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaBootstrap } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

const skillsData = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" />, level: 100 },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" />, level: 100 },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-4xl" />, level: 85 },
  { name: "React", icon: <FaReact className="text-blue-400 text-4xl" />, level: 90 },
  { name: "Tailwind CSS", icon: <FaCss3Alt className="text-teal-400 text-4xl" />, level: 100 },
  { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3] text-4xl" />    , level: 100 },
  { name: "Git / GitHub", icon: <FaGitAlt className="text-red-500 text-4xl" />, level: 80 },
  { name: "Next.js", icon: <RiNextjsFill  className="text-black-500 text-4xl" />, level: 80 },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full py-20 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">
          My <span className="text-blue-500">Skills</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-10">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center hover:scale-105 transform transition duration-300"
            >
              {skill.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="text-gray-600 mt-2">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
