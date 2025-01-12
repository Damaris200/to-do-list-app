function Progress({ tasks }) {
    const completedTasks = tasks.filter((task) => task.completed).length;
    const totalTasks = tasks.length;
    const progress = totalTasks ? (completedTasks / totalTasks) * 100 : 0;
  
    return (
      <div className="progress">
        <h3>Today's Progress</h3>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span>{Math.round(progress)}%</span>
      </div>
    );
  }
  
  export default Progress;
  