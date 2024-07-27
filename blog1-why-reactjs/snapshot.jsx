// DASHBOARD COMPONENT (PARENT)
import React, { useState } from "react";
import TaskList from "./TaskList"; // import child component

const Dashboard = () => {
  // State to hold the list of tasks
  const [tasks, setTasks] = useState([
    { id: 1, name: "Task 1", completed: false },
    { id: 2, name: "Task 2", completed: true },
    { id: 2, name: "Task 3", completed: false },
  ]);

  // Function to mark a task as completed
  const markTaskAsCompleted = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Project Dashboard</h1>
      <TaskList tasks={tasks} onCompleteTask={markTaskAsCompleted} />
    </div>
  );
};

export default Dashboard;