import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import './TodoList.css'

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  const deleteTodo = (id) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
    })
      .then(() => setTodos(todos.filter((todo) => todo.id !== id)))
      .catch((error) => console.log(error));
  };

  const updateTodo = (updatedTodo) => {
    fetch(`http://localhost:3000/todos/${updatedTodo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
    })
      .then((response) => response.json())
      .then((data) => {
        const newTodos = todos.map((todo) =>
          todo.id === updatedTodo.id ? data : todo
        );
        setTodos(newTodos);
      })
      .catch((error) => console.log(error));
  };

  const addTodo = (event) => {
    event.preventDefault();

    const newTodoObj = {
      task: newTodo,
      completed: false,
    };

    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodoObj),
    })
      .then((response) => response.json())
      .then((data) => {
        setTodos([...todos, data]);
        setNewTodo("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="t-hero">
    <div className="t-big">
      <form onSubmit={addTodo}className='form'>
        <h1>Lets get things done...</h1>
        <input
          type="text"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
        />
        <button type="submit" disabled={!newTodo} className='t-btn'>Add Todo</button>
      </form>
      <div className="bidder">
      {todos.map((todo) => (
        
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
      </div>
    </div>
    </div>
  );
};

export default TodoList;
