import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../Assets/Todo.css";

function Todo({ todo, remove, update, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.task);

  const handleClick = e => {
    remove(e.target.id);
  };
  const toggleFrom = () => {
    setIsEditing(!isEditing);
  };
  const handleUpdate = e => {
    e.preventDefault();
    update(todo.id, task);
    toggleFrom();
  };
  const handleChange = e => {
    setTask(e.target.value);
  };
  const toggleCompleted = e => {
    toggleComplete(e.target.id);
  };

  let result;
  if (isEditing) {
    result = (
      <div className="Todo">
        <form className="Todo-edit-form" onSubmit={handleUpdate}>
          <input onChange={handleChange} value={task} type="text" />
          <button>Save</button>
        </form>
      </div>
    );
  } else {
    result = (
      <div className="Todo">
        <li
          id={todo.id}
          onClick={toggleCompleted}
          className={todo.completed ? "Todo-task completed" : "Todo-task"}
        >
          {todo.task}
        </li>
        <div className="Todo-buttons">
          <button onClick={toggleFrom}>
            <i className="fas fa-pen" />
          </button>
          <button onClick={handleClick}>
            <i id={todo.id} className="fas fa-trash" />
          </button>
        </div>
      </div>
    );
  }
  return result;
}

export default Todo;
