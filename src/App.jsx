import React, { useState, useEffect } from "react";
import "./index.css";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";
import FilterBar from "./components/FilterBar";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    if (!text.trim()) return;
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const completedCount = tasks.filter((t) => t.completed).length;
  const progress =
    tasks.length === 0 ? 0 : Math.round((completedCount / tasks.length) * 100);

  return (
    <div className="app-wrapper">

      {/* 🔥 Background Video (OUTSIDE UI BOX) */}
      <video className="bg-video" autoPlay loop muted playsInline>
        <source src="/Shadow-Monarch.mp4" type="video/mp4" />
      </video>

      {/* 🔥 UI CARD */}
      <div className="app-container">
        <h1>⚔️ Hunter’s Quest Log</h1>

        <div className="xp-bar">
          <div className="xp-fill" style={{ width: `${progress}%` }}></div>
          <span className="xp-text">{progress}% XP</span>
        </div>

        <TaskInput onAddTask={addTask} />
        <FilterBar filter={filter} setFilter={setFilter} />

        <div className="task-list">
          {filteredTasks.length === 0 ? (
            <p className="empty">No quests found...</p>
          ) : (
            filteredTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onDelete={deleteTask}
                onToggle={toggleComplete}
              />
            ))
          )}
        </div>
      </div>

    </div>
  );
}
