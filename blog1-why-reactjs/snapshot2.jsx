// TASKLIST COMPONENT (CHILD)
import React from "react";
import TaskItem from "./TaskItem"; // import sub-child component

const TaskList = ({ tasks, onCompleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onComplete={() => onCompleteTask(task.id)}
        />
      ))}
    </ul>
  );
};

export default TaskList;