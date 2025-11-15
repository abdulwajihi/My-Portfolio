// src/components/Experience.jsx
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-6 py-16"
    >
      <h2 className="text-5xl font-bold text-teal-400 mb-16">
        Experience
      </h2>

      <motion.div
        className="relative flex flex-col md:flex-row items-center gap-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Icon */}
        <div className="bg-teal-500 text-gray-950 p-6 rounded-full shadow-lg">
          <Briefcase size={40} />
        </div>

        {/* Card */}
        <motion.div
          className="bg-gray-900 p-8 rounded-2xl border-l-4 border-teal-500 max-w-xl shadow-lg"
          whileHover={{ scale: 1.03 }}
        >
          <h3 className="text-2xl font-semibold text-teal-400">
            Java Developer Intern
          </h3>
          <p className="text-lg mt-2 text-gray-300">Tech OctaNet Pvt. Ltd.</p>
          <p className="text-sm text-gray-400">June 2024 - July 2024</p>

          <ul className="list-disc list-inside mt-4 text-gray-300 leading-relaxed">
            <li>Developed REST APIs using Spring Boot and Hibernate.</li>
            <li>Integrated MySQL database and implemented user authentication with Spring Security.</li>
            <li>Tested and documented APIs using Postman and Swagger.</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
