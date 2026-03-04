import React, { useContext } from "react";
import TaskCard from "./TaskCard";
import { AppContext } from "../App";

const TaskList = () => {
  const { getFilteredTasks } = useContext(AppContext);
  const tasks = getFilteredTasks();

  return (
    <div className="space-y-4">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks to show</p>
      ) : (
        tasks.map(task => <TaskCard key={task.id} task={task} />)
      )}
    </div>
  );
};

export default TaskList;