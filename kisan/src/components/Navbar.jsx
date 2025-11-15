// import { Link, useLocation } from "react-router-dom";
// import { motion } from "framer-motion";
// import { useLanguage } from "../context/LanguageContext.jsx";

// export default function Navbar() {
//   const location = useLocation();
//   const active = "text-yellow-300 font-semibold";
//   const { language, setLanguage } = useLanguage();

//   return (
//     <>
//       <motion.nav
//         className="bg-green-700 text-white flex justify-between items-center p-4 shadow-md sticky top-0 z-50"
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6 }}
//       >
//         <h1 className="text-xl font-bold tracking-wide">🌾 Krishi-Astra</h1>
//         <div className="space-x-6 text-lg">
//           <Link to="/" className={location.pathname === "/" ? active : ""}>
//             Home
//           </Link>
//           <Link
//             to="/market"
//             className={location.pathname === "/market" ? active : ""}
//           >
//             Market
//           </Link>
//           <Link
//             to="/ai-diary"
//             className={location.pathname === "/ai-diary" ? active : ""}
//           >
//             AI Diary
//           </Link>
//           <Link
//             to="/community"
//             className={location.pathname === "/community" ? active : ""}
//           >
//             Community
//           </Link>
//           <select
//             className="bg-green-700 p-2 rounded"
//             onChange={(e) => setLanguage(e.target.value)}
//             value={language}
//           >
//             <option value="en">English</option>
//             <option value="hi">Hindi</option>
//             <option value="te">Telugu</option>
//             <option value="mr">Marathi</option>
//             <option value="bn">Bengali</option>
//             <option value="ta">Tamil</option>
//             <option value="kn">Kannada</option>
//             <option value="gu">Gujarati</option>
//             <option value="pa">Punjabi</option>
//             <option value="ur">Urdu</option>
//           </select>
//         </div>
//       </motion.nav>
//     </>
//   );
// }

// import React, { useState, useEffect } from "react";

// // --- MOCK DEPENDENCIES for single-file environment ---
// const Link = ({ to, children, className }) => (
//   <a href={to} className={className}>
//     {children}
//   </a>
// );
// const useLocation = () => ({
//   pathname: typeof window !== "undefined" ? window.location.pathname : "/",
// });
// const useLanguage = () => {
//   const [language, setLanguage] = useState("en");
//   return { language, setLanguage };
// };
// // --- End MOCK DEPENDENCIES ---

// export default function Navbar() {
//   const location = useLocation();

//   // Refined active class: brighter emerald text, strong underline, smooth transition
//   const activeClass =
//     "text-emerald-700 font-bold border-b-2 border-emerald-500 hover:text-emerald-600 transition duration-300 ease-in-out py-1";
//   const inactiveClass =
//     "text-gray-700 hover:text-emerald-500 transition duration-300 ease-in-out py-1";

//   const { language, setLanguage } = useLanguage();

//   return (
//     <nav
//       // Increased vertical padding (py-4) and a more prominent shadow (shadow-xl)
//       className="bg-white text-gray-800 flex flex-col md:flex-row justify-between items-center px-6 py-4 shadow-xl sticky top-0 z-50 border-b border-gray-100"
//     >
//       <h1 className="text-2xl font-extrabold tracking-tight mb-3 md:mb-0 text-gray-900">
//         🌾 Krishi-Astra
//       </h1>

//       <div className="flex flex-wrap justify-center items-center gap-4 md:gap-x-8 text-base md:text-lg">
//         {/* Navigation Links */}
//         <Link
//           to="/"
//           className={location.pathname === "/" ? activeClass : inactiveClass}
//         >
//           Home
//         </Link>
//         <Link
//           to="/market"
//           className={
//             location.pathname === "/market" ? activeClass : inactiveClass
//           }
//         >
//           Market
//         </Link>
//         <Link
//           to="/ai-diary"
//           className={
//             location.pathname === "/ai-diary" ? activeClass : inactiveClass
//           }
//         >
//           AI Diary
//         </Link>
//         <Link
//           to="/community"
//           className={
//             location.pathname === "/community" ? activeClass : inactiveClass
//           }
//         >
//           Community
//         </Link>

//         {/* Language Selector - Now has better focus and visual style */}
//         <select
//           className="bg-gray-50 border border-gray-300 text-gray-800 px-3 py-2 rounded-xl cursor-pointer
//                      focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none
//                      text-sm md:text-base transition-shadow appearance-none" // Use appearance-none for custom arrow styling if needed
//           onChange={(e) => setLanguage(e.target.value)}
//           value={language}
//         >
//           <option value="en">English</option>
//           <option value="hi">Hindi</option>
//           <option value="te">Telugu</option>
//           <option value="mr">Marathi</option>
//           <option value="bn">Bengali</option>
//           <option value="ta">Tamil</option>
//           <option value="kn">Kannada</option>
//           <option value="gu">Gujarati</option>
//           <option value="pa">Punjabi</option>
//           <option value="ur">Urdu</option>
//         </select>
//       </div>
//     </nav>
//   );
// }

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
// Assuming these are correctly imported from their respective paths
// import { useLanguage } from "../context/LanguageContext.jsx";

// Icon Components (Replacing lucide-react imports for single-file use)
const Menu = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-menu"
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);
const X = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-x"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  // const { language, setLanguage } = useLanguage(); // Uncomment if useLanguage is available

  const { language, setLanguage } = useLanguage();

  const active =
    "text-emerald-600 font-bold relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[3px] after:bg-emerald-600 after:rounded-full";

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/market", label: "Market" },
    { to: "/ai-diary", label: "AI Diary" },
  ];

  const LinkItem = ({ to, label, className }) => (
    <Link
      to={to}
      onClick={() => setIsOpen(false)}
      className={
        location.pathname === to
          ? active
          : `hover:text-emerald-600 transition-colors duration-200 relative group ${className}`
      }
    >
      {label}
      {/* Subtle hover underline effect */}
      <span className="absolute bottom-[-4px] left-0 w-0 h-[3px] bg-emerald-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );

  return (
    <>
      <motion.nav
        // Refined Soft Light Theme Styling
        className="bg-white text-gray-800 border-b border-gray-200 shadow-sm sticky top-0 z-50 transition-colors duration-300"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center py-4">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-3xl text-emerald-600">🌱</span>
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">
              Krishi Astra
            </h1>
          </Link>

          {/* Desktop Navigation & Language Selector */}
          <div className="hidden lg:flex items-center space-x-8 text-lg font-medium">
            {navLinks.map((link) => (
              <LinkItem
                key={link.to}
                to={link.to}
                label={link.label}
                className="text-gray-700"
              />
            ))}

            {/* Language Selector */}
            <select
              className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg border border-gray-300 shadow-inner focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
              onChange={(e) => setLanguage(e.target.value)}
              value={language}
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="te">Telugu</option>
              <option value="mr">Marathi</option>
              <option value="bn">Bengali</option>
              <option value="ta">Tamil</option>
              <option value="kn">Kannada</option>
              <option value="gu">Gujarati</option>
              <option value="pa">Punjabi</option>
              <option value="ur">Urdu</option>
            </select>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-emerald-600 transition-colors duration-200"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu (Slide Out) */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
        }}
        className={`lg:hidden absolute w-full bg-white shadow-xl z-40 overflow-hidden ${
          isOpen ? "py-4 border-b border-gray-200" : ""
        }`}
      >
        <div className="flex flex-col space-y-4 px-6">
          {navLinks.map((link) => (
            <LinkItem
              key={link.to}
              to={link.to}
              label={link.label}
              className="text-gray-700 text-lg py-1 border-b border-gray-100"
            />
          ))}

          {/* Mobile Language Selector */}
          <div className="pt-4">
            <label
              htmlFor="mobile-language"
              className="text-sm font-semibold text-gray-600 block mb-1"
            >
              Select Language:
            </label>
            <select
              id="mobile-language"
              className="w-full bg-gray-100 text-gray-700 px-3 py-2 rounded-lg border border-gray-300 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
              onChange={(e) => setLanguage(e.target.value)}
              value={language}
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="te">Telugu</option>
              <option value="mr">Marathi</option>
              <option value="bn">Bengali</option>
              <option value="ta">Tamil</option>
              <option value="kn">Kannada</option>
              <option value="gu">Gujarati</option>
              <option value="pa">Punjabi</option>
              <option value="ur">Urdu</option>
            </select>
          </div>
        </div>
      </motion.div>
    </>
  );
}
