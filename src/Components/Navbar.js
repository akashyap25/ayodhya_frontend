import React, { useState, useEffect, useRef } from "react";
import logo from "../Assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="navbar-container" style={{ maxWidth: "100%" }}>
      <header className="flex items-center justify-between p-2 lg:p-2 w-full mx-auto">
        {/* Left Section (Logo) */}
        <div className="flex items-center">
          <img
            src={logo}
            alt=""
            className="max-w-full h-auto"
            style={{ maxWidth: "150px" }}
          />
          <div>
            <h1 className="text-2xl font-bold text-orange-500">
              प्रसाद आपके द्वार
            </h1>
            <h3 className="font-semibold text-sm">prasadaapkedwaar.in</h3>
          </div>
        </div>

        {/* Custom Hamburger Menu for Mobile */}
        <div className="lg:hidden" ref={menuRef}>
          <button onClick={toggleMenu} className="text-orange-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Right Section (Menu) */}
        <nav
          className={`lg:flex ${isOpen ? "block" : "hidden"} absolute top-16 right-2 w-full lg:w-auto bg-white lg:bg-transparent lg:flex-row flex-col text-center lg:text-left lg:items-center lg:gap-6`}
          style={{ opacity: isOpen ? "1" : "1" }}
        >
          <ul className="flex flex-col text-center lg:mt-0 lg:text-left lg:flex-row lg:items-center lg:gap-6">
            <li className="border-t border-slate-400 py-4 lg:border-transparent lg:py-0">
              <a href="#home" className="uppercase lg:text-lg font-semibold lg:text-slate-800 tracking-widest hover:text-orange-400">
                Home
              </a>
            </li>
            <li className="border-t border-slate-400 py-4 lg:border-transparent lg:py-0">
              <a href="#about" className="uppercase lg:text-lg font-semibold lg:text-slate-800 tracking-widest hover:text-orange-400">
                About
              </a>
            </li>
            <li className="border-t border-slate-400 py-4 lg:border-transparent lg:py-0">
              <a href="#contact" className="uppercase lg:text-lg font-semibold lg:text-slate-800 tracking-widest hover:text-orange-400">
                Contact
              </a>
            </li>
            <li className="border-t border-slate-400 py-4 lg:border-transparent lg:py-0">
              <a href="#login" className="bg-orange-400 lg:bg-orange-400 font-semibold text-white py-2 px-4 rounded shadow-lg hover:opacity-75 lg:text-lg uppercase tracking-widest border-2 lg:border-orange-400 lg:hover-bg-transparent lg:hover-text-slate-800 transition-all duration-200 w-full">
                Login
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
