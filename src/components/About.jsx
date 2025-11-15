import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 px-6 py-20"
    >
      <motion.h2
        className="text-4xl font-bold text-teal-400 mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="max-w-3xl text-center text-gray-300 text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        I’m <span className="text-teal-400 font-semibold">Abdul Wajihi Khan</span>,
        a passionate <span className="text-teal-400">Java Backend Developer</span> 
        with hands-on experience in building RESTful APIs using 
        Spring Boot, MySQL, and Microservices architecture.
        I enjoy developing scalable backend systems and integrating APIs 
        that make applications more dynamic and reliable.
      </motion.p>
    </section>
  );
}
