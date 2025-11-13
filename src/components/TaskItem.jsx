import React from "react";

export default function TaskItem({ task, onToggle, onDelete }) {
  if (!task) return null; // <-- prevents crash

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <div className="left">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span>{task.text}</span>
      </div>

      <button className="delete-btn" onClick={() => onDelete(task.id)}>
        🗑
      </button>
    </div>
  );
}
