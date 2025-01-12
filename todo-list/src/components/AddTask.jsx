import React, { useState } from "react";

function AddTask({ addTask }) {
  const [taskText, setTaskText] = useState("");
  const [category, setCategory] = useState("");

  const handleAdd = () => {
    if (taskText.trim() && category.trim()) {
      addTask({
        id: Date.now(),
        text: taskText,
        completed: false,
        category,
      });
      setTaskText("");
      setCategory("");
    }
  };

  return (
    <div className="add-task">
      <h3>Add New Task</h3>
      <input
        type="text"
        placeholder="Task Name"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddTask;
