import React, { createContext, useState, useEffect } from 'react';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  
  const addTodo = (task) => {
    setTodos([...todos, { id: Date.now(), task, completed: false, isEditing: false }]);
  };

  
  const toggleComplete = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  /
  const editTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)));
  };

  
  const editTask = (task, id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, task, isEditing: false } : todo)));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleComplete, deleteTodo, editTodo, editTask }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
