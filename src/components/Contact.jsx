// import React from "react";
// import { MdEmail, MdLocationOn } from "react-icons/md";
// import { FaLinkedin, FaGithub } from "react-icons/fa";

// export default function Contact() {
//   return (
//     <section id="contact" className="py-20 text-white">
//       <div className="max-w-4xl mx-auto px-6 text-center">
//         <h2 className="text-4xl font-bold mb-6 text-white">Get In <span className="text-purple-400">Touch</span></h2>
//         <p className="text-gray-400 mb-12">
//           I’m currently open to new opportunities and projects. Feel free to reach out!
//         </p>

//         {/* Contact Info */}
//         <div className="space-y-8 max-w-md mx-auto text-left">
//           {/* Email */}
//           <div className="flex items-start space-x-4">
//             <MdEmail className="text-purple-400 text-3xl mt-1" />
//             <div>
//               <p className="font-semibold text-gray-300">Email</p>
//               <a
//                 href="mailto:faizabatool28890@gmail.com"
//                 className="text-white hover:text-purple-400 transition"
//               >
//                 faizabatool28890@gmail.com
//               </a>
//             </div>
//           </div>

//           {/* Location */}
//           <div className="flex items-start space-x-4">
//             <MdLocationOn className="text-purple-400 text-3xl mt-1" />
//             <div>
//               <p className="font-semibold text-gray-300">Location</p>
//               <span className="text-white">Rawalpindi, Pakistan</span>
//             </div>
//           </div>
//         </div>

//         {/* Social Links */}
//         <div className="flex justify-center mt-12 space-x-4 text-3xl">
//           <a
//             href="https://linkedin.com/in/yourprofile"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white hover:text-purple-400 transition"
//           >
//             <FaLinkedin />
//           </a>
//           <a
//             href="https://github.com/FaizaBatool11"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white hover:text-purple-400 transition"
//           >
//             <FaGithub />
//           </a>
//         </div>

//         {/* Call to action */}
//         <a
//           href="mailto:faizabatool28890@gmail.com"
//           className="mt-8 inline-block px-8 py-4 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition"
//         >
//           Contact Me
//         </a>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact({ darkMode }) {
  return (
    <section
      id="contact"
      className={`py-20 ${
        darkMode ? "text-white" : "text-black bg-gray-100"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className={`text-4xl font-bold mb-6 ${
          darkMode ? "text-white" : "text-black"
        }`}>
          Get In <span className="text-violet-500">Touch</span>
        </h2>
        <p className={darkMode ? "text-gray-100 mb-12" : "text-gray-700 mb-12"}>
          I’m currently open to new opportunities and projects. Feel free to reach out!
        </p>

        {/* Contact Info */}
        <div className="space-y-8 max-w-md mx-auto text-left">
          {/* Email */}
          <div className="flex items-start space-x-4">
            <MdEmail className="text-violet-400 text-3xl mt-1" />
            <div>
              <p className={darkMode ? "font-semibold text-gray-300" : "font-semibold text-black"}>Email</p>
              <a
                href="mailto:faizabatool28890@gmail.com"
                className={`hover:text-violet-400 transition ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                faizabatool28890@gmail.com
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start space-x-4">
            <MdLocationOn className="text-violet-400 text-3xl mt-1" />
            <div>
              <p className={darkMode ? "font-semibold text-gray-300" : "font-semibold text-black"}>Location</p>
              <span className={darkMode ? "text-white" : "text-black"}>Rawalpindi, Pakistan</span>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center mt-12 space-x-4 text-2xl">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="group transition"
          >
            <FaLinkedin
              className={`transition-colors duration-300 ${
                darkMode
                  ? "text-white group-hover:text-violet-500"
                  : "text-black group-hover:text-violet-500"
              }`}
            />
          </a>
          <a
            href="https://github.com/FaizaBatool11"
            target="_blank"
            rel="noopener noreferrer"
            className="group transition"
          >
            <FaGithub
              className={`transition-colors duration-300 ${
                darkMode
                  ? "text-white group-hover:text-violet-500"
                  : "text-black group-hover:text-violet-500"
              }`}
            />
          </a>
        </div>

        {/* Call to action */}
        <a
          href="mailto:faizabatool28890@gmail.com"
          className="mt-8 inline-block px-8 py-4 bg-violet-500 text-white font-semibold rounded-full hover:bg-violet-600 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
