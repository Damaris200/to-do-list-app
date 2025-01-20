import React, { useState } from "react";

function AddTask({ addTask }) {
  const [taskText, setTaskText] = useState("");
  const [category, setCategory] = useState("health"); // Default category set to 'health'

  const handleAdd = () => {
    if (taskText.trim() && category.trim()) {
      const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false,
        category,
      };
      addTask(newTask);
      setTaskText(""); // Reset task text
      setCategory("health"); // Reset category to default
    } else {
      alert("Please enter a task name and select a category.");
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
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option> {/* Placeholder */}
        <option value="health">Health</option>
        <option value="errands">Errands</option>
        <option value="learning">Learning</option>
        <option value="cleaning">Cleaning</option>
      </select>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddTask;
