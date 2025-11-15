import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-800 shadow-lg fixed w-full top-0 z-50">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold text-teal-400">
        Abdul Wajihi Khan
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-gray-200">
        <li><a href="#about" className="hover:text-teal-400">About</a></li>
        <li><a href="#skills" className="hover:text-teal-400">Skills</a></li>
        <li><a href="#experience" className="hover:text-teal-400">Experience</a></li>
        <li><a href="#projects" className="hover:text-teal-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
      </ul>

      {/* Mobile Hamburger */}
      <div 
        className="md:hidden text-gray-200 text-2xl cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <ul className="absolute top-16 left-0 w-full bg-gray-900 flex flex-col gap-6 px-8 py-6 text-gray-200 md:hidden">
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
          <li><a href="#experience" onClick={() => setOpen(false)}>Experience</a></li>
          <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
