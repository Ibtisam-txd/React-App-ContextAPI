import React, { useState, useContext } from 'react';
import TodoContext from '../contexts/TodoContext';

export const EditTodoForm = ({ task }) => {
  const [value, setValue] = useState(task.task);
  const { editTask } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(value, task.id);
    setValue('');
  };

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input
        type='text'
        className='todo-input'
        value={value}
        placeholder='Update Task'
        onChange={(e) => setValue(e.target.value)}
      />
      <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  );
};
