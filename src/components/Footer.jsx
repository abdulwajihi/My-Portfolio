// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 text-center py-6 border-t border-gray-800">
      <p>
        © {new Date().getFullYear()} <span className="text-teal-400 font-semibold">Abdul Wajihi Khan</span>. 
        All rights reserved.
      </p>
    </footer>
  );
}
