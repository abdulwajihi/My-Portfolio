import { motion } from "framer-motion";

const skills = {
  "Languages": ["Core Java (JSE)", "Advanced Java (J2EE)","JavaScript (ES6+)", "SQL","HTML5",
"CSS3"],
  "Core Subjects": ["DSA", "Operating System", "DBMS", "Computer Networks"],
  "Database": ["MySQL"],
  "Front-end":["Html","Css","JavaScript","React.js","Tailwind Css"],
  "Back-end": ["Spring Boot","Hibernate", "Spring Data JPA", "MVC", "Microservices"],
  "Tools & Technologies": ["VS Code", "IntelliJ IDEA", "Git", "Postman", "Swagger", "Docker"]
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-800 px-6 py-20 text-center"
    >
      <motion.h2
        className="text-4xl font-bold text-teal-400 mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Technical Skills
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={category}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-teal-500/30 transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-teal-300 mb-4">{category}</h3>
            <ul className="space-y-2 text-gray-300">
              {items.map((skill) => (
                <li key={skill} className="hover:text-white transition">{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
