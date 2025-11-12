import { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";
import "./index.css";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("quests"));
    if (saved) setTasks(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("quests", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    if (text.trim() === "") return;
    setTasks([...tasks, { text, completed: false }]);
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div className="app-container">
      <h1 className="title">Solo Leveling Quest Log ⚔️</h1>
      <TaskInput addTask={addTask} />
      <div className="task-list">
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            index={index}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
