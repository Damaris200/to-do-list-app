import React, {
  useState,
  useRef,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import AddTask from "./components/AddTask";

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

  const inputRef = useRef(null); // Ref for task input

  // Automatically focus the task input field
  useEffect(() => {
    inputRef.current?.focus();
  }, [taskName]);

  // Log task changes for debugging
  useEffect(() => {
    console.log("Tasks updated:", tasks);
  }, [tasks]);

  const addTask = useCallback(
    (task) => {
      const taskName = task.taskName;
      const category = task.category;
      if (taskName && category) {
        setTasks((prevTasks) => [
          ...prevTasks,
          { id: prevTasks.length + 1, task: taskName.trim(), completed: false, category },
        ]);
      } else {
        alert("Please provide a valid task name and category.");
      }
    },
    [] 
  );

  const deleteTask = useCallback((id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }, []);

  const editTask = useCallback(
    (id) => {
      const task = tasks.find((task) => task.id === id);
      if (task) {
        setTaskName(task.task);
        setCategory(""); // Reset category
      }
    },
    [tasks]
  );

  const toggleCompletion = useCallback((id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  // Memoized progress calculations
  const completedTasks = useMemo(
    () => tasks.filter((task) => task.completed).length,
    [tasks]
  );
  const totalTasks = useMemo(() => tasks.length, [tasks]);
  const progressPercentage = useMemo(
    () => (totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0),
    [completedTasks, totalTasks]
  );

  const handleCategoryClick = useCallback((category) => {
    setShowOptions(category);
  }, []);

  const handleOptionSelect = useCallback(
    (option) => {
      alert(`You selected ${option} for ${showOptions}!`);
      setShowOptions(""); // Hide options after selection
    },
    [showOptions]
  );

  return (
    <div className="container">
      <h1 className="title">My Todo List App</h1>
      <div className="main">
        {/* Left Section */}
        <div className="left-section">
          <div className="frame">
            <div className="section-wrapper">
              <h2 className="section-title">List of tasks</h2>
              <input
                type="search"
                name="search-tasks"
                placeholder="Search Tasks"
              />
            </div>
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
                    ✎
                  </span>
                  <span
                    className="icon trash-icon"
                    onClick={() => deleteTask(task.id)}
                  >
                    🗑
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
              <p>{progressPercentage.toFixed(2)}% Completed</p>
            </div>
          </div>
          <div className="frame">
            <AddTask addTask={addTask} />
          </div>
        </div>
      </div>
      {/* Footer with Categories */}
      <div className="footer">
        {["Cleaning", "Errands", "Learning", "Health"].map((cat) => (
          <button
            key={cat}
            className="footer-button"
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      {showOptions && (
        <div className="options-modal">
          <h4>Select an option for {showOptions}</h4>
          {["Option 1", "Option 2", "Option 3"].map((opt) => (
            <button key={opt} onClick={() => handleOptionSelect(opt)}>
              {opt}
            </button>
          ))}
          <button onClick={() => setShowOptions("")}>Close</button>
        </div>
      )}
    </div>
  );
};

export default App;
