import React, { useContext } from "react";
import { AppContext } from "../App";
import { Github, Instagram, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const { theme } = useContext(AppContext);
  const isDark = theme === "dark";

  return (
    <footer className={`mt-10 pt-8 pb-6 border-t ${isDark ? "border-gray-700 text-gray-400" : "border-gray-200 text-gray-500"}`}>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
        <div>
          <h2 className={`text-lg font-bold ${isDark ? "text-white" : "text-gray-800"}`}>Smart-Study</h2>
          <p className="text-xs">Your productivity partner.</p>
        </div>
        <div className="flex gap-6">
          <a href="https://www.instagram.com/_.soumya_28?igsh=MW51OTV2bnc3aHdxaQ==" target="_blank" className="hover:text-indigo-500 transition-colors"><Instagram size={20} /></a>
          <a href="https://github.com/SoumyaranjanDS" target="_blank" className="hover:text-indigo-500 transition-colors"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/soumyaranjanlink/" target="_blank" className="hover:text-indigo-500 transition-colors"><Linkedin size={20} /></a>
        </div>
        <div className="text-xs flex items-center gap-1">
          Made with <Heart size={12} className="text-red-500 fill-red-500" /> by <span className="italic">SOUMYA</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;