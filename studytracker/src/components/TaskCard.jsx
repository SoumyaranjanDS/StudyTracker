import React, { useContext } from "react";
import { AppContext } from "../App";

const TaskCard = ({ task }) => {
  const { toggleComplete, deleteTask, theme } = useContext(AppContext);
  const isDark = theme === "dark";

  return (
    <div
      className={`flex justify-between items-center rounded-2xl p-5 shadow-md transition ${
        isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } ${task.completed ? "line-through opacity-60" : ""}`}
    >
      <div>
        <h3 className="text-lg font-semibold">{task.title}</h3>
        <p
          className={`text-sm font-medium ${
            task.priority === "High"
              ? "text-red-500"
              : task.priority === "Medium"
              ? "text-yellow-500"
              : "text-green-500"
          }`}
        >
          Priority: {task.priority}
        </p>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => toggleComplete(task.id)}
          className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          ✓
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default TaskCard;