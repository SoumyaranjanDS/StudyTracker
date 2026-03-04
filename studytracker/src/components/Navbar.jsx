import React, { useContext } from "react";
import { AppContext } from "../App";

const Navbar = () => {
  const { theme, setTheme } = useContext(AppContext);
  const isDark = theme === "dark";

  return (
    <div
      className={`flex justify-between items-center rounded-2xl px-6 py-4 shadow-md transition-all duration-500 ${
        isDark ? "bg-gray-800" : "bg-white"
      }`}
    >
      <h1 className="text-xl sm:text-2xl font-bold">
        Smart-Study
      </h1>

      <button
        onClick={() =>
          setTheme(isDark ? "light" : "dark")
        }
        className={`px-4 py-2 rounded-xl font-medium transition duration-300 ${
          isDark
            ? "bg-yellow-400 text-black hover:bg-yellow-300"
            : "bg-indigo-500 text-white hover:bg-indigo-600"
        }`}
      >
        {isDark ? "Light" : "Dark"}
      </button>
    </div>
  );
};

export default Navbar;