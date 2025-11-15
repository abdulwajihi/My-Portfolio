// src/components/Contact.jsx
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_alovpka",      // 🔹 Replace with your EmailJS service ID
        "template_piyzf2v",     // 🔹 Replace with your EmailJS template ID
        form.current,
        "ZS63uCq3eMe-PsRkY"       // 🔹 Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus("❌ Failed to send. Please try again later.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-6 py-20"
    >
      <motion.h2
        className="text-5xl font-bold text-teal-400 mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col mb-4">
          <label className="text-left text-gray-300 mb-2">Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            className="p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-teal-400 outline-none"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label className="text-left text-gray-300 mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-teal-400 outline-none"
          />
        </div>

        <div className="flex flex-col mb-6">
          <label className="text-left text-gray-300 mb-2">Message</label>
          <textarea
            rows="4"
            name="message"
            required
            placeholder="Write your message..."
            className="p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-teal-400 outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition-all"
        >
          <Send size={20} /> Send Message
        </button>

        {/* Status Message */}
        {status && (
          <p className="text-teal-400 mt-4 text-center font-medium">{status}</p>
        )}
      </motion.form>

      {/* Social Icons */}
      <motion.div
        className="flex gap-6 mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <a
          href="mailto:abdulwajihikhan786@gmail.com"
          className="text-gray-300 hover:text-teal-400 transition"
        >
          <Mail size={28} />
        </a>
        <a
          href="https://github.com/abdulwajihi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-teal-400 transition"
        >
          <Github size={28} />
        </a>
        <a
          href="https://linkedin.com/in/abdul-wajihi-khan-98957a204"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-teal-400 transition"
        >
          <Linkedin size={28} />
        </a>
      </motion.div>
    </section>
  );
}
