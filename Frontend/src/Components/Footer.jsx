import React from "react";
import { FaTasks } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-[#1F2937] bg-white dark:bg-[#0D1117] py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-5 text-sm text-gray-600 dark:text-gray-400">
        
        {/* Logo & Copyright */}
        <div className="flex items-center gap-2">
          <FaTasks className="text-indigo-500 text-lg" />
          <span>
            © 2026 <span className="font-semibold text-gray-800 dark:text-white">
              Task Management System
            </span>{" "}
            • Built by Abhishek Kumar. All rights reserved.
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-5">
          <Link
            to="/"
            className="hover:text-indigo-500 transition-colors duration-200"
          >
            Home
          </Link>

          <Link
            to="/dashboard/tasks"
            className="hover:text-indigo-500 transition-colors duration-200"
          >
            Dashboard
          </Link>

          <Link
            to="/"
            className="hover:text-indigo-500 transition-colors duration-200"
          >
            Privacy Policy
          </Link>

          <Link
            to="/"
            className="hover:text-indigo-500 transition-colors duration-200"
          >
            Terms of Service
          </Link>

          <Link
            to="/"
            className="hover:text-indigo-500 transition-colors duration-200"
          >
            Support
          </Link>
        </div>
      </div>

      {/* Bottom Tagline */}
      <div className="mt-6 text-center text-xs text-gray-500 dark:text-gray-500 px-4">
        Simplify your workflow, stay organized, and achieve more with a modern
        task management experience.
      </div>
    </footer>
  );
};

export default Footer;