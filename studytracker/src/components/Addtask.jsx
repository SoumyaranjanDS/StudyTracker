import React, { useContext, useState } from "react";
import { AppContext } from "../App";

const AddTask = () => {
  const { addTask, theme } = useContext(AppContext);
  const isDark = theme === "dark";

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("High");
  const [error, setError] = useState("");

  const handleAdd = () => {
    const cleanTitle = title.trim();

    if (cleanTitle.length === 0) {
      setError("Task cannot be empty");
      return;
    }
    if (cleanTitle.length < 3) {
      setError("Task must be at least 3 characters");
      return;
    }
    if (cleanTitle.length > 100) {
      setError("Task is too long");
      return;
    }

    const result = addTask({ title: cleanTitle, priority });
    if (result === "duplicate") {
      setError("Duplicate task not allowed");
      return;
    }

    setTitle("");
    setPriority("High");
    setError("");
  };

  return (
    <div
      className={`rounded-2xl p-6 shadow-md transition-all duration-500 ${
        isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 flex flex-col">
          <input
            type="text"
            placeholder="Enter your task..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`flex-1 px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 ${
              isDark
                ? "bg-gray-700 border-gray-600 focus:ring-indigo-400"
                : "border-gray-300 focus:ring-indigo-400"
            }`}
          />
          {error && <p className="text-red-500 mt-1">{error}</p>}
        </div>

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className={`px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 ${
            isDark
              ? "bg-gray-700 border-gray-600 focus:ring-indigo-400"
              : "border-gray-300 focus:ring-indigo-400"
          }`}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <button
          onClick={handleAdd}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-xl transition duration-300"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTask;