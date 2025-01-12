import React, { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Do the dishes", completed: false },
    { id: 2, task: "Do the laundry", completed: false },
    { id: 3, task: "Clean the kitchen", completed: false },
    { id: 4, task: "Vacuum the living room", completed: false },
  ]);
  const [taskName, setTaskName] = useState("");
  const [category, setCategory] = useState("");
  const [showOptions, setShowOptions] = useState("");

  const addTask = () => {
    if (taskName.trim() && category.trim()) {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, task: taskName.trim(), completed: false },
      ]);
      setTaskName("");
      setCategory("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id) => {
    const task = tasks.find((task) => task.id === id);
    if (task) {
      setTaskName(task.task);
      setCategory(""); // Reset category
    }
  };

  const toggleCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const progressPercentage =
    totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  const handleCategoryClick = (category) => {
    setShowOptions(category);
  };

  const handleOptionSelect = (option) => {
    alert(`You selected ${option} for ${showOptions}!`);
    setShowOptions(""); // Hide options after selection
  };

  return (
    <div className="container">
      <h1 className="title">Simple TodoList</h1>
      <div className="main">
        {/* Left Section */}
        <div className="left-section">
          <div className="frame">
            <h3 className="section-title">List of Cleaning Tasks</h3>
            <div className="task-list">
              {tasks.map((task) => (
                <div key={task.id} className="task-item">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleCompletion(task.id)}
                    className="checkbox"
                  />
                  <span className="task-text">{task.task}</span>
                  <span
                    className="icon edit-icon"
                    onClick={() => editTask(task.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="blue"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.502 1.94a1.5 1.5 0 0 1 0 2.12l-9.66 9.658a.5.5 0 0 1-.168.11l-4 1.5a.5.5 0 0 1-.65-.65l1.5-4a.5.5 0 0 1 .11-.168l9.658-9.66a1.5 1.5 0 0 1 2.12 0zM12.854 3L3 12.854V14h1.146L14 3.146 12.854 3z" />
                    </svg>
                  </span>
                  <span
                    className="icon trash-icon"
                    onClick={() => deleteTask(task.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="red"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v7a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0V6zM10 5.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5z" />
                      <path
                        fillRule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 1 1 0-2h4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5h4a1 1 0 0 1 1 1zM12 4H4v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4z"
                      />
                    </svg>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="right-section">
          <div className="frame">
            <h3 className="section-title">Today's Progress</h3>
            <div className="progress">
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
          <div className="frame">
            <h3 className="section-title">Add New Task</h3>
            <input
              type="text"
              placeholder="Task Name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              className="input"
            />
            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="input"
            />
            <button onClick={addTask} className="add-button">
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="footer">
        <button
          className="footer-button"
          onClick={() => handleCategoryClick("Cleaning")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M1.5 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v1h-12v-1zm12 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3h10zM2 4v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4H2z" />
          </svg>
          Cleaning
        </button>
        <button
          className="footer-button"
          onClick={() => handleCategoryClick("Errands")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8.5 1.5a.5.5 0 0 1 .5.5v1h-1v-1a.5.5 0 0 1 .5-.5zM8 3h-2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-6zm5 10H3V6h10v7z" />
          </svg>
          Errands
        </button>
        <button
          className="footer-button"
          onClick={() => handleCategoryClick("Learning")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 3l6 6-6 6-6-6 6-6zM8 1L1 8l7 7 7-7L8 1z" />
          </svg>
          Learning
        </button>
        <button
          className="footer-button"
          onClick={() => handleCategoryClick("Health")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM8 7a1 1 0 1 1-1-1 1 1 0 0 1 1 1z" />
          </svg>
          Health
        </button>
      </div>
      {showOptions && (
        <div className="options-modal">
          <h4>Select an option for {showOptions}</h4>
          {showOptions === "Learning" && (
            <div className="learning-options">
              <button onClick={() => handleOptionSelect("Books")}>Books</button>
              <button onClick={() => handleOptionSelect("Courses")}>Courses</button>
              <button onClick={() => handleOptionSelect("Tutorials")}>Tutorials</button>
            </div>
          )}
          {showOptions === "Health" && (
            <div className="health-options">
              <button onClick={() => handleOptionSelect("Exercise")}>Exercise</button>
              <button onClick={() => handleOptionSelect("Diet")}>Diet</button>
              <button onClick={() => handleOptionSelect("Meditation")}>Meditation</button>
            </div>
          )}
          {showOptions === "Errands" && (
            <div className="errands-options">
              <button onClick={() => handleOptionSelect("Shopping")}>Shopping</button>
              <button onClick={() => handleOptionSelect("Pay Bills")}>Pay Bills</button>
              <button onClick={() => handleOptionSelect("Grocery")}>Grocery</button>
            </div>
          )}
          {showOptions === "Cleaning" && (
            <div className="cleaning-options">
              <button onClick={() => handleOptionSelect("Vacuum")}>Vacuum</button>
              <button onClick={() => handleOptionSelect("Dusting")}>Dusting</button>
              <button onClick={() => handleOptionSelect("Organizing")}>Organizing</button>
            </div>
          )}
          <button onClick={() => setShowOptions("")}>Close</button>
        </div>
      )}
    </div>
  );
};

export default App;
