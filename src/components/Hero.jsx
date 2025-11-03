// import React from "react";
// import { motion } from "framer-motion";
// import StarsBackground from "./StarsBackground";

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex flex-col justify-center items-center text-center text-white py-20 overflow-hidden"
//     >
//       {/* 🌌 Same starry background style as Contact */}
//       <StarsBackground />

//       <div className="relative z-10 px-6">
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-6xl md:text-6xl font-bold mb-4 text-purple-400"
//         >
//           Hi, I’m Faiza Batool
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 1 }}
//           className="md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
//         >
//           I enjoy creating responsive, user-friendly websites using React, Tailwind CSS, 
//           and Node.js while continuously improving my web development skills.

//         </motion.p>

//         <motion.a
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.6, duration: 0.8 }}
//           href="#projects"
//           className="inline-block px-8 py-4 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition"
//         >
//           View My Work
//         </motion.a>
//       </div>
//     </section>
//   );
// }
import React from "react";
import { motion } from "framer-motion";
import StarsBackground from "./StarsBackground";

export default function Hero({ darkMode }) {
  return (
    <section
      id="home"
      className={`relative min-h-screen flex flex-col justify-center items-center text-center py-20 overflow-hidden ${
        darkMode ? "bg-black text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Stars background only in dark mode */}
      {darkMode && <StarsBackground darkMode={darkMode} />}

      <div className="relative z-10 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`text-6xl md:text-6xl font-bold mb-4 ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Hi, I’m <span className="text-violet-500">Faiza</span> Batool
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className={`md:text-lg mb-8 max-w-2xl mx-auto ${
            darkMode ? "text-gray-100" : "text-gray-800"
          }`}
        >
          I enjoy creating responsive, user-friendly websites using React, Tailwind CSS, 
          and Node.js while continuously improving my web development skills.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          href="#projects"
          className="inline-block px-8 py-4 bg-violet-500 text-white font-semibold rounded-full hover:bg-violet-600 transition"
        >
          View My Work
        </motion.a>
      </div>
    </section>
  );
}
