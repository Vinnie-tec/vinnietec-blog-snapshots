// TASKITEM COMPONENT (SUB-CHILD)
import React from "react";

const TaskItem = ({ task, onComplete }) => {
  return (
    <li>
      <span>{task.name}</span>
      {!task.completed && <button onClick={onComplete}>Complete</button>}
      {task.completed && <span>✔ Completed</span>}
    </li>
  );
};

export default TaskItem;