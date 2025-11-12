function TaskItem({ task, index, toggleTask, deleteTask }) {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(index)}
      />
      <span>{task.text}</span>
      <button className="delete-btn" onClick={() => deleteTask(index)}>
        ✖
      </button>
    </div>
  );
}

export default TaskItem;
