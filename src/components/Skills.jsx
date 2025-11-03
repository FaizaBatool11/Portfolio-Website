import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiMysql } from "react-icons/si";

const skillsData = [
  { name: "HTML", icon: <FaHtml5 />, level: 90, category: "frontend" },
  { name: "CSS", icon: <FaCss3Alt />, level: 90, category: "frontend" },
  { name: "JavaScript", icon: <FaJs />, level: 70, category: "frontend" },
  { name: "React", icon: <FaReact />, level: 65, category: "frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 70, category: "frontend" },
  { name: "Node.js", icon: <FaNodeJs />, level: 80, category: "backend" },
  { name: "Express.js", icon: <SiExpress />, level: 75, category: "backend" },
  { name: "MongoDB", icon: <SiMongodb />, level: 70, category: "backend" },
  { name: "MySQL", icon: <SiMysql />, level: 75, category: "backend" },
  { name: "Git/GitHub", icon: <FaGitAlt />, level: 50, category: "tools" },
];

const Skills = ({ darkMode }) => {
  const [filter, setFilter] = useState("all");

  const filteredSkills =
    filter === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === filter);

  return (
    <section id="skills"
      className={`py-20 relative overflow-hidden min-h-screen ${
        darkMode ? " text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className={`text-4xl font-bold mb-8`}>
          <span className={darkMode ? "" : "text-black"}>My </span>
          <span className="text-violet-500">Skills</span>
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {["all", "frontend", "backend", "tools"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full font-medium transition ${
                filter === cat
                  ? "bg-violet-500 text-white shadow-lg shadow-purple-500/30"
                  : darkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-violet-500 hover:text-white"
                  : "bg-white text-black border border-gray-300 hover:bg-violet-500 hover:text-white"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 justify-items-center">
            {filteredSkills.map((skill, index) => (
              <div
                key={index}
                className={`rounded-sm p-6 shadow-lg hover:shadow-purple-700/50 transition duration-300 transform hover:-translate-y-1 w-80 ${
                  darkMode
                    ? "bg-gray-900"
                    : "bg-white border border-gray-200"
                }`}
              >
                <div className="flex items-center mb-3">
                  <div className="text-3xl text-violet-400">{skill.icon}</div>
                  <h3 className={`${darkMode ? "text-white" : "text-black"} text-lg font-semibold ml-3`}>
                    {skill.name}
                  </h3>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2.5">
                  <div
                    className="bg-violet-500 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className={`${darkMode ? "text-gray-400" : "text-black"} text-sm mt-2`}>
                  {skill.level}%
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
