import React, { useState } from "react";
import './Todo.css'

const Todo = ({ todo, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(todo.task);

  const handleUpdateChange = (event) => {
    setUpdatedTask(event.target.value);
  };

  const handleUpdateSubmit = (event) => {
    event.preventDefault();
    updateTodo({
      ...todo,
      task: updatedTask,
    });
    setIsEditing(false);
  };

  return (
    
    <div className="big-g">
      {!isEditing ? (
        <div className="big-btn">
          <div>{todo.task}</div>
          <div className="btns">
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleUpdateSubmit} className='form-two'>
          <input type="text" value={updatedTask} onChange={handleUpdateChange} />
          <div className="btns">
          <button>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </form>
      )}
    </div>
   
  );
};

export default Todo;
