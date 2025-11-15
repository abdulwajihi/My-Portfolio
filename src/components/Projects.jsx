// src/components/Projects.jsx
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Pix Circle",
    description:
      "A social media platform where users can share photos, view others’ posts, and manage profiles. Built with React, Spring Boot, and MySQL. Deployed on Render & Cloudinary.",
    tech: ["React", "Spring Boot", "MySQL", "Cloudinary"],
    github: "https://github.com/abdulwajihi/CollegeProjectBackend.git",
    live: "https://pixcircle.onrender.com",
  },
//   {
//     title: "Study Notes App",
//     description:
//       "An Android app for uploading and selling study notes. Uses Firebase for authentication and Cloudinary for file uploads.",
//     tech: ["Android", "Firebase", "Cloudinary"],
//     github: "https://github.com/abdulwajihi/study-notes",
//     live: "#",
//   },
 {
  title: "E-Commerce Multivendor Backend",
  description:
    "A powerful backend system for managing multiple vendors, products, orders, payments, and users. Built with Spring Boot, MySQL, and Cloudinary integration for product images.",
  tech: ["Spring Boot", "MySQL", "Cloudinary", "JWT", "Swagger"],
  github: "https://github.com/abdulwajihi/ecommerce-multivendor-backend",
  live: "#",
},

];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-950 text-white flex flex-col items-center px-6 py-20"
    >
      <h2 className="text-5xl font-bold text-teal-400 mb-16">Projects</h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-2xl border border-gray-800 shadow-lg hover:shadow-teal-500/20 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-teal-400 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-teal-900/40 text-teal-300 text-sm px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-300 hover:text-teal-400 transition"
              >
                <Github size={18} /> GitHub
              </a>

              {project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-300 hover:text-teal-400 transition"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
