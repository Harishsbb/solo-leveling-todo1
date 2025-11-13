import React, { useState } from "react";

export default function TaskInput({ onAddTask }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    onAddTask(text);
    setText("");
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Enter your next quest..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add Quest</button>
    </div>
  );
}
