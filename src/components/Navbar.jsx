// import React, { useState, useEffect } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

// export default function Navbar() {
//   const [navOpen, setNavOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const toggleNav = () => setNavOpen(!navOpen);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50); // when scrolled down a bit
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         scrolled ? "bg-black/70 backdrop-blur-md shadow-lg" : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
//         <div className="text-2xl font-bold text-purple-400">
//           Faiza<span className="text-white"> Portfolio</span>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-8 text-white">
//           {["home", "about", "skills", "projects", "contact"].map((section) => (
//             <a
//               key={section}
//               href={`#${section}`}
//               className="hover:text-purple-400 transition-colors duration-200"
//             >
//               {section.charAt(0).toUpperCase() + section.slice(1)}
//             </a>
//           ))}
//         </div>

//         {/* Mobile Menu Icon */}
//         <div
//           className="md:hidden text-white text-2xl cursor-pointer"
//           onClick={toggleNav}
//         >
//           {navOpen ? <FaTimes /> : <FaBars />}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {navOpen && (
//         <div className="md:hidden bg-black/90 text-white px-6 py-6 space-y-3">
//           {["home", "about", "skills", "projects", "contact"].map((section) => (
//             <a
//               key={section}
//               href={`#${section}`}
//               className="block py-2 text-lg hover:text-purple-400 transition"
//               onClick={toggleNav}
//             >
//               {section.charAt(0).toUpperCase() + section.slice(1)}
//             </a>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

// export default function Navbar({ darkMode, setDarkMode }) {
//   const [navOpen, setNavOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const toggleNav = () => setNavOpen(!navOpen);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50); // when scrolled down a bit
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         scrolled
//           ? `bg-gray-100 dark:bg-black/90 backdrop-blur-md shadow-lg`
//           : `bg-gray-100 dark:bg-black`
//       }`}
//     >
//       <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <div className="text-2xl font-bold text-black dark:text-white">
//           Faiza<span className="text-violet-500 dark:text-violet-500"> Portfolio</span>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-8">
//           {["home", "about", "skills", "projects", "contact"].map((section) => (
//             <a
//               key={section}
//               href={`#${section}`}
//               className="text-black dark:text-white hover:text-violet-500 transition-colors duration-200"
//             >
//               {section.charAt(0).toUpperCase() + section.slice(1)}
//             </a>
//           ))}
//         </div>

//         {/* Right Side: Theme Toggle */}
//         <div className="flex items-center gap-4">
//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="p-2"
//           >
//             {darkMode ? (
//               <FaSun className="text-yellow-400" />
//             ) : (
//               <FaMoon className="text-gray-900 dark:text-white" />
//             )}
//           </button>

//           {/* Mobile Menu Icon */}
//           <div
//             className="md:hidden text-black dark:text-white text-2xl cursor-pointer"
//             onClick={toggleNav}
//           >
//             {navOpen ? <FaTimes /> : <FaBars />}
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {navOpen && (
//         <div className="text-black dark:text-white dark:hover:text-violet-500 hover:text-violet-500 transition-colors duration-200">
//           {["home", "about", "skills", "projects", "contact"].map((section) => (
//             <a
//               key={section}
//               href={`#${section}`}
//               className="block py-2 text-lg hover:text-violet-500transition"
//               onClick={toggleNav}
//             >
//               {section.charAt(0).toUpperCase() + section.slice(1)}
//             </a>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// }

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import StarsBackground from "./StarsBackground";

export default function Navbar({ darkMode, setDarkMode }) {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["home", "about", "skills", "projects", "contact"];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-100 dark:bg-black/90 backdrop-blur-md shadow-lg"
          : "bg-gray-100 dark:bg-black"
      }`}
    >
      {/* Stars Background only in dark mode */}
      {darkMode && <StarsBackground className="absolute inset-0 z-0" />}

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-black dark:text-white">
          Faiza
          <span className="text-violet-500 dark:text-violet-500"> Portfolio</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="text-black dark:text-white hover:text-violet-500 dark:hover:text-violet-500 transition-colors duration-200"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>

        {/* Right Side: Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-4">
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 text-xl">
            {darkMode ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-gray-900 dark:text-white" />
            )}
          </button>

          <div
            className="md:hidden text-black dark:text-white text-2xl cursor-pointer"
            onClick={toggleNav}
          >
            {navOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-black px-6 py-6 space-y-3">
          {menuItems.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={toggleNav}
              className="block py-2 text-lg text-black dark:text-white hover:text-violet-500 dark:hover:text-violet-500 transition-colors duration-200"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
