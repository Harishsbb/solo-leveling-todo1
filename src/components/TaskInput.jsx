import { useState } from "react";

function TaskInput({ addTask }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    addTask(text);
    setText("");
  };

  return (
    <div className="task-input">
      <input
        type="text"
        value={text}
        placeholder="Enter a new quest..."
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add Quest</button>
    </div>
  );
}

export default TaskInput;
