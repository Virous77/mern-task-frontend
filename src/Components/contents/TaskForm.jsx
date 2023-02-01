import React from "react";
import "./Task.css";

const TaskForm = ({ submitForm, placeholder, content, task, setTask }) => {
  return (
    <>
      <form onSubmit={submitForm} className="form">
        <input
          type="text"
          placeholder={placeholder}
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button>{content}</button>
      </form>
    </>
  );
};

export default TaskForm;
