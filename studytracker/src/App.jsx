import React, { createContext, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import AddTask from "./components/AddTask";
import FilterBar from "./components/FilterBar";
import TaskList from "./components/TaskList";
import QuoteSection from "./components/QuoteSection";
import Footer from "./components/Footer";

// Single context for tasks + theme + filter
export const AppContext = createContext();

const App = () => {
  const [theme, setTheme] = useState(()=>{
    const savedTheme = localStorage.getItem("theme")
    return savedTheme ? savedTheme : 'light'
  });
  const [tasks, setTasks] = useState(()=> {
    const savedTasks = localStorage.getItem("tasks")
    return savedTasks ? JSON.parse(savedTasks) : []
  });
  const [filter, setFilter] = useState("All");

  // Add task with duplicate check
  const addTask = ({ title, priority }) => {
    if (tasks.some(task => task.title.toLowerCase() === title.toLowerCase())) {
      return "duplicate";
    }
    const newTask = { id: Date.now(), title, priority, completed: false };
    setTasks(prev => [...prev, newTask]);
    return "success";
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])
  useEffect(()=>{
    localStorage.setItem("theme", theme)
  }, [theme])
  

  // Toggle complete/incomplete
  const toggleComplete = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  // Return tasks according to current filter
  const getFilteredTasks = () => {
    switch (filter) {
      case "Completed":
        return tasks.filter(task => task.completed);
      case "Pending":
        return tasks.filter(task => !task.completed);
      case "High":
      case "Medium":
      case "Low":
        return tasks.filter(task => task.priority === filter);
      default:
        return tasks; // All
    }
  };

  const isDark = theme === "dark";

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        tasks,
        addTask,
        toggleComplete,
        deleteTask,
        filter,
        setFilter,
        getFilteredTasks
      }}
    >
      <div
        className={`min-h-screen transition-all duration-500 ${
          isDark
            ? "bg-linear-to-br from-gray-900 to-black text-white"
            : "bg-linear-to-br from-indigo-100 via-white to-purple-100 text-gray-800"
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          <Navbar />
          <AddTask />
          <FilterBar />
          <TaskList />
          <QuoteSection />
          <Footer />
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default App;