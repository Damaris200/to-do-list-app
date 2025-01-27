import { useState } from "react";
import PropTypes from "prop-types";
import '../assets/add-task.css' ;

function AddTask({ addTask }) {
  const [taskText, setTaskText] = useState("");
  const [category, setCategory] = useState("health");

  const handleAdd = () => {
    if (taskText.trim() && category.trim()) {
      const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false,
        category,
      };
      addTask(newTask);
      setTaskText("");
      setCategory("health");
    } else {
      alert("Please enter a task name and select a category.");
    }
  };

  return (
    <div className="add-task-container">
      <h3>Add New Task</h3>
      <input
        type="text"
        placeholder="Task Name"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        className="task-input"
      />
      
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="task-select"
      >
        <option value="">Select Category</option>
        <option value="health">Health</option>
        <option value="errands">Errands</option>
        <option value="learning">Learning</option>
        <option value="cleaning">Cleaning</option>
      </select>

      <button onClick={handleAdd} className="add-task-button">
        Add Task
      </button>
    </div>
  );
}

AddTask.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default AddTask;