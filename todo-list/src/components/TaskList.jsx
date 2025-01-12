import React from "react";

function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <div className="task-list">
      <h2>List of Cleaning Tasks</h2>
      {tasks.map((task) => (
        <div key={task.id} className="task">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            {task.text}
          </span>
          <button onClick={() => deleteTask(task.id)}>🗑</button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
