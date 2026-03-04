Study Tracker – Technical Documentation
Repository

GitHub Link:
```
https://github.com/SoumyaranjanDS/StudyTracker
```
How to Clone and Run the Project
1. Clone the Repository
```
git clone https://github.com/SoumyaranjanDS/StudyTracker.git
```
3. Navigate into the Project Folder
```
cd StudyTracker
```
4. Install Dependencies
```
npm install
```
5. Start the Development Server

If using Vite:
```
npm run dev
```
If using Create React App:
```
npm start
```
Component Breakdown

1. App.jsx – Core Logic
Create Global Context
```
export const AppContext = createContext();
Persist Theme to Local Storage
useEffect(() => {
  localStorage.setItem("theme", theme);
}, [theme]);
```
Persist Tasks to Local Storage
```
useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);
```
Add Task (Immutable Update)
```
setTasks([...tasks, newTask]);
```
Provide Global Data
```
<AppContext.Provider value={{ tasks, setTasks, theme, setTheme }}>
```
2. Navbar.jsx – Theme Toggle Logic
Access Global Context
```
const { theme, setTheme } = useContext(AppContext);
```
Toggle Theme
```
setTheme(theme === "light" ? "dark" : "light");
```
3. AddTask.jsx – Duplicate Prevention & Add Task
Duplicate Task Prevention
```
const duplicate = tasks.some(
  (task) => task.title.toLowerCase() === input.toLowerCase()
);
```
Add Task
```
addTask({ title: input, priority, completed: false });
```
4. FilterBar.jsx – Update Filter Logic
```
setFilter("completed");
```
Available filter values:
all
completed
pending
5. TaskList.jsx – Filtering Logic
```
const filteredTasks = tasks.filter((task) => {
  if (filter === "completed") return task.completed;
  if (filter === "pending") return !task.completed;
  return true;
});
```
6. TaskCard.jsx – Toggle & Delete Logic
Toggle Completion
```
task.completed = !task.completed;
```
Delete Task
```
setTasks(tasks.filter((t) => t !== task));
```
7. QuoteSection.jsx – API Fetch Logic
Fetch Using CORS Proxy
```
const response = await fetch(
  "https://api.allorigins.win/get?url=" +
  encodeURIComponent("https://zenquotes.io/api/quotes")
);
```
Parse Response
```
const data = JSON.parse(result.contents);
```
Select Random Quote
```
const randomIndex = Math.floor(Math.random() * data.length);
setQuote(data[randomIndex].q);
```
Application Architecture Flow
```
App.jsx
   ↓
Context Provider
   ↓
Child Components
   ↓
State Updates
   ↓
UI Re-render
```
Key Concepts Used
 - Functional Components
 - React Hooks (useState, useEffect, useContext)
 - Context API
 - Immutable State Updates
 - Array Methods (map, filter, some)
 - Fetch API
 - LocalStorage Persistence
 - Responsive Design (Tailwind CSS)
