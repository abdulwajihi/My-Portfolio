/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center text-center h-screen bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-teal-400 mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Abdul Wajihi Khan
      </motion.h1>
      <motion.p
        className="text-lg md:text-2xl text-gray-300 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Java Spring Boot Developer | Backend Engineer
      </motion.p>

      <div className="flex gap-6 text-2xl text-gray-400">
        <a href="mailto:abdulwajih.khan786@gmail.com" className="hover:text-teal-400">
          <FaEnvelope className="cursor-pointer" />
        </a>
        <a href="https://github.com/abdulwajihi" className="hover:text-teal-400" target="_blank">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/abdul-wajihi-khan-98957a204" className="hover:text-teal-400" target="_blank">
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
