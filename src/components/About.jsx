// import React from "react";
// import { FaCode, FaProjectDiagram, FaLightbulb } from "react-icons/fa";
// import StarsBackground from "./StarsBackground";

// export default function About({darkMode}) {
//   const cards = [
//     {
//       icon: <FaCode className="text-purple-400 text-2xl" />,
//       title: "Web Development",
//       description:
//         "Creating responsive websites and web applications with modern frameworks.",
//     },
//     {
//       icon: <FaProjectDiagram className="text-purple-400 text-2xl" />,
//       title: "Project Management",
//       description:
//         "Planning, organizing, and managing projects effectively to ensure timely and quality delivery.",
//     },
//     {
//       icon: <FaLightbulb className="text-purple-400 text-2xl" />,
//       title: "Problem Solving",
//       description:
//         "Efficiently analyzing and solving technical challenges and debugging issues.",
//   },
//   ];

//   return (
//     <section
//       id="about"
//       className="relative py-24 overflow-hidden bg-white dark:bg-black text-gray-900 dark:text-gray-100"
//     >
//       {/* 🌟 Starry Background */}
//       <StarsBackground darkMode={darkMode} />

//       {/* Centered Heading */}
//       <div className="w-full text-center mb-12">
//         <h2 className="text-4xl font-bold">
//           About <span className="text-purple-400">Me</span>
//         </h2>
//       </div>

//       <div className="relative max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row gap-12 items-start md:items-center">
//         {/* Left Column */}
//         <div className="md:w-1/2 space-y-6">
        
//           <h3 className="text-2xl font-semibold text-gray-200">
//             Passionate Web Developer
//           </h3>

//           <p className="text-gray-400 leading-relaxed">
//             As a dedicated Full Stack Web Developer, I specialize in building 
//             responsive and user-friendly web applications using React, Node.js, 
//             and Tailwind CSS.
//           </p>

//           <p className="text-gray-400 leading-relaxed">
//             After completing my Full Stack Web Development course from NAVTTC, I’ve 
//             gained hands-on experience in developing both frontend and backend solutions, 
//             including RESTful APIs, database management, and interactive user interfaces.
//           </p>

//           <p className="text-gray-400 leading-relaxed">
//             Familiar with Git/GitHub, eager to gain team experience, and focused on building 
//             practical, user-friendly web applications while learning and growing as a developer.
//           </p>

//           <div className="flex gap-4 mt-8">
//             <a
//               href="#contact"
//               className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold transition duration-300"
//             >
//               Get In Touch
//             </a>
//             <a
//               href="/c:\Users\Faisal\Downloads\My Resume.pdf"
//               target="_blank"
//               className="px-6 py-3 rounded-full border border-purple-500 hover:bg-purple-500 hover:text-white font-semibold transition duration-300"
//             >
//               Download CV
//             </a>
//           </div>
//         </div>

//         {/* Right Column - Skill cards */}
//         <div className="md:w-1/2 grid grid-cols-1 gap-6">
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className="bg-[#121224]/80 backdrop-blur-md border border-gray-700 rounded-sm p-6 flex items-start gap-4 hover:border-purple-500 hover:shadow-purple-500/40 transition duration-300"
//             >
//               <div className="bg-[#1a1a28] p-3 rounded-xl">{card.icon}</div>
//               <div>
//                 <h4 className="text-lg font-semibold mb-1">{card.title}</h4>
//                 <p className="text-gray-400 text-sm">{card.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { FaCode, FaProjectDiagram, FaLightbulb } from "react-icons/fa";
import StarsBackground from "./StarsBackground";

export default function About({ darkMode }) {
  const cards = [
    {
      icon: <FaCode className="text-purple-400 text-2xl" />,
      title: "Web Development",
      description:
        "Creating responsive websites and web applications with modern frameworks.",
    },
    {
      icon: <FaProjectDiagram className="text-purple-400 text-2xl" />,
      title: "Project Management",
      description:
        "Planning, organizing, and managing projects effectively to ensure timely and quality delivery.",
    },
    {
      icon: <FaLightbulb className="text-purple-400 text-2xl" />,
      title: "Problem Solving",
      description:
        "Efficiently analyzing and solving technical challenges and debugging issues.",
    },
  ];

  return (
    <section
      id="about"
      className={`relative py-24 overflow-hidden ${
        darkMode
          ? "bg-black text-gray-100"
          : "bg-gray-100 text-black"
      }`}
    >
      {/* 🌟 Starry Background only in dark mode */}
      {darkMode && <StarsBackground darkMode={darkMode} />}

      {/* Centered Heading */}
      <div className="w-full text-center mb-12">
        <h2 className={`text-4xl font-bold ${darkMode ? "" : "text-black"}`}>
          About <span className="text-violet-500">Me</span>
        </h2>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row gap-12 items-start md:items-center">
        {/* Left Column */}
        <div className="md:w-1/2 space-y-6">
          <h3 className={`${darkMode ? "text-gray-100" : "text-black"} text-2xl font-semibold`}>
            Passionate Web Developer
          </h3>

          <p className={`${darkMode ? "text-gray-100" : "text-black"} leading-relaxed`}>
            As a dedicated Full Stack Web Developer, I specialize in building 
            responsive and user-friendly web applications using React, Node.js, 
            and Tailwind CSS.
          </p>

          <p className={`${darkMode ? "text-gray-100" : "text-black"} leading-relaxed`}>
            After completing my Full Stack Web Development course from NAVTTC, I’ve 
            gained hands-on experience in developing both frontend and backend solutions, 
            including RESTful APIs, database management, and interactive user interfaces.
          </p>

          <p className={`${darkMode ? "text-gray-100" : "text-black"} leading-relaxed`}>
            Familiar with Git/GitHub, eager to gain team experience, and focused on building 
            practical, user-friendly web applications while learning and growing as a developer.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-violet-500 hover:bg-violet-600 text-white font-semibold transition duration-300"
            >
              Get In Touch
            </a>
            <a
              href="/c:\Users\Faisal\Downloads\My Resume.pdf"
              target="_blank"
              className={`px-6 py-3 rounded-full border font-semibold transition duration-300 ${
                darkMode
                  ? "border-violet-500 hover:bg-violet-500 hover:text-white"
                  : "border-violet-500 hover:bg-violet-500 hover:text-white"
              }`}
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Column - Skill cards */}
<div className="md:w-1/2 grid grid-cols-1 gap-6">
  {cards.map((card, index) => (
    <div
      key={index}
      className={`${
        darkMode
          ? "bg-[#121224]/80 border border-gray-700 backdrop-blur-md"
          : "bg-white border border-gray-300 shadow-md"
      } rounded-sm p-6 flex items-start gap-4 transition duration-300 transform hover:scale-105 hover:border-violet-500`}
    >
      <div className={`${darkMode ? "bg-[#1a1a28]" : "bg-gray-100"} p-3 rounded-3xl`}>
        {card.icon}
      </div>
      <div>
        <h4 className={`${darkMode ? "text-gray-100" : "text-black"} text-lg font-semibold mb-1`}>
          {card.title}
        </h4>
        <p className={`${darkMode ? "text-gray-100" : "text-gray-700"}`}>
          {card.description}
        </p>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
