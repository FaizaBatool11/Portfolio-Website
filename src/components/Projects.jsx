// import React from "react";
// import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
// const projects = [
//   {
//     title: "Job Portal",
//     description: "Developed a job portal using React and Tailwind, with dynamic job search, real-time filtering, and seamless user experience. Built and integrated custom APIs for job listings and applications.",
//     tags: ["React", "Node.js", "Express.js", "MongoDB"],
//     image: "/images/image.png",
//     live: "#", // update if deployed
//     github: "https://github.com/FaizaBatool11/Job-Portal-Phase-1-",
//   },
//   {
//     title: "SaaS Travel Management System",
//     description: "Developed a SaaS-based Travel Management System supporting multiple agencies with role-based access control and dynamic dashboards.",
//     tags: ["Next.js", "Node.js", "MySql", "Express.js", "TailwindCSS"],
//     image: "/images/image1.png",
//     live: "https://saas-based-travel-management-system.vercel.app/", // replace with actual Vercel link
//     github: "https://github.com/FaizaBatool11/SaaS-Based-Travel-Management-System", // link to GitHub repo if available
//   },
//   {
//     title: "Portfolio Website",
//     description: "A personal portfolio website showcasing my projects, skills, and professional experience, built with React and Tailwind CSS for a modern, responsive, and interactive user experience.",
//     tags: ["React", "TailwindCSS"],
//     image: "/images/image2.png",
//     live: "#", // update if deployed
//     github: "#",
//   },
// ];


// export default function Projects() {
//   return (
//     <section
//       id="projects"
//       className="relative py-20 text-white overflow-hidden"
//     >
//       <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
//         <h2 className="text-4xl font-bold text-purple-400 mb-4">
//           Featured <span className="text-white">Projects</span>
//         </h2>
//         <p className="text-gray-400 mb-12">
//           Here are some of my recent projects. Each project was carefully crafted
//           with attention to detail, performance, and user experience.
//         </p>

//         {/* Project Cards */}
//         <div className="grid md:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-[#121212]/90 backdrop-blur-md rounded-sm shadow-lg p-4 hover:scale-105 transition-transform duration-300 border border-gray-800 hover:border-purple-500/50"
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="rounded-xl mb-4 h-48 w-full object-cover"
//               />
//               <div className="flex flex-wrap gap-2 mb-3">
//                 {project.tags.map((tag, i) => (
//                   <span
//                     key={i}
//                     className="text-xs bg-[#121212]/90 text-gray-400 px-3 py-1 rounded-full border border-gray-700"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//               <h3 className="text-xl font-semibold mb-2 text-white">
//                 {project.title}
//               </h3>
//               <p className="text-gray-400 text-sm mb-4">{project.description}</p>

//               <div className="flex items-center justify-center gap-4 text-xl">
//                 <a
//                   href={project.live}
//                   className="text-gray-400 hover:text-purple-400 transition-colors"
//                 >
//                   <FaExternalLinkAlt />
//                 </a>
//                 <a
//                   href={project.github}
//                   className="text-gray-400 hover:text-purple-400 transition-colors"
//                 >
//                   <FaGithub />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Button */}
//         <div className="mt-12">
//           <a
//             href="https://github.com/FaizaBatool11"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-700 transition-all"
//           >
//             Check My Github →
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Job Portal",
    description:
      "Developed a job portal using React and Tailwind, with dynamic job search, real-time filtering, and seamless user experience. Built and integrated custom APIs for job listings and applications.",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    image: "/images/image.png",
    live: "#",
    github: "https://github.com/FaizaBatool11/Job-Portal-Phase-1-",
  },
  {
    title: "SaaS Travel Management System",
    description:
      "Developed a SaaS-based Travel Management System supporting multiple agencies with role-based access control and dynamic dashboards.",
    tags: ["Next.js", "Node.js", "MySql", "Express.js", "TailwindCSS"],
    image: "/images/image1.png",
    live: "https://saas-based-travel-management-system.vercel.app/",
    github: "https://github.com/FaizaBatool11/SaaS-Based-Travel-Management-System",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my projects, skills, and professional experience, built with React and Tailwind CSS for a modern, responsive, and interactive user experience.",
    tags: ["React", "TailwindCSS"],
    image: "/images/image2.png",
    live: "#",
    github: "#",
  },
];

export default function Projects({ darkMode }) {
  return (
    <section
      id="projects"
      className={`relative py-20 overflow-hidden ${
        darkMode ? "text-white " : "bg-gray-100 text-black"
      }`}
    >
      <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
        <h2 className="text-4xl font-bold mb-4">
          <span className={darkMode ? "text-white" : "text-black"}>
            Featured{" "}
          </span>
          <span className="text-violet-500">Projects</span>
        </h2>
        <p className={darkMode ? "text-gray-100 mb-12" : "text-gray-700 mb-12"}>
          Here are some of my recent projects. Each project was carefully crafted
          with attention to detail, performance, and user experience.
        </p>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-sm shadow-lg p-4 hover:scale-105 transition-transform duration-300 border ${
                darkMode
                  ? "bg-[#121212]/90 border-gray-800 hover:border-purple-500/50"
                  : "bg-white border border-gray-200 hover:border-purple-500/50"
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl mb-4 h-48 w-full object-cover"
              />
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`text-xs px-3 py-1 rounded-full border ${
                      darkMode
                        ? "bg-[#121212]/90 text-gray-400 border-gray-700"
                        : "bg-gray-100 text-gray-700 border-gray-300"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3
                className={`text-xl font-semibold mb-2 ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                {project.title}
              </h3>
              <p className={darkMode ? "text-gray-400 text-sm mb-4" : "text-gray-700 text-sm mb-4"}>
                {project.description}
              </p>

              <div className="flex items-center justify-center gap-4 text-xl">
                <a
                  href={project.live}
                  className="text-gray-400 hover:text-violet-500 transition-colors"
                >
                  <FaExternalLinkAlt />
                </a>
                <a
                  href={project.github}
                  className="text-gray-400 hover:text-violet-500 transition-colors"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12">
          <a
            href="https://github.com/FaizaBatool11"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-violet-500 text-white px-6 py-3 rounded-full font-medium hover:bg-violet-600 transition-all"
          >
            Check My Github →
          </a>
        </div>
      </div>
    </section>
  );
}

