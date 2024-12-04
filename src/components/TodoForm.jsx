import React, { useState } from 'react';
import { useContext } from 'react';
import TodoContext from '../contexts/TodoContext';

export const TodoForm = () => {
  const { addTodo } = useContext(TodoContext);
  const [todoText, setTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim()) {
      addTodo(todoText);
      setTodoText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        className="todo-input"
        placeholder="Add a new task"
      />
      <button type="submit" className="todo-btn">
        Add Todo
      </button>
    </form>
  );
};
