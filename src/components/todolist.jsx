import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list">
      <h2>To-Do List</h2>
      <div className="todo-input">
        <input
          type="text"
          placeholder="       Add a new to-do"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="todo-list-input"
          style={{ color: 'black' }}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <div className="todos">
        {todos.map((todo, index) => (
          <div key={index} className="todo">
            {todo}
            <br></br>
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
