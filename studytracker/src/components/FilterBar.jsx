import React, { useContext } from "react";
import { AppContext } from "../App";

const FilterBar = () => {
  const { filter, setFilter, theme } = useContext(AppContext);
  const isDark = theme === "dark";

  const buttons = ["All", "Completed", "Pending", "High", "Medium", "Low"];

  return (
    <div
      className={`flex flex-wrap gap-2 rounded-2xl p-4 ${
        isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      {buttons.map(btn => (
        <button
          key={btn}
          onClick={() => setFilter(btn)}
          className={`px-4 py-2 rounded-xl transition-colors duration-300 ${
            filter === btn
              ? "bg-indigo-500 text-white"
              : isDark
              ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;