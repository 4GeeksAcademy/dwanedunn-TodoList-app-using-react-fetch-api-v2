import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo('');
  };

  // Fetch the user from api onload

  async function getUserfromApi() {
    // This is the URL to fetch the user data
    const url = `https://playground.4geeks.com/todo/users/dwanedunn`;
    try {
      const response = await fetch(url);

      // If the API response is not ok, create the username
      if (!response.ok) {
        const createUser_URL = `https://playground.4geeks.com/todo/users/dwanedunn`;

        const response = fetch(createUser_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username: 'dwanedunn' }),
        });
      }
      const apiData = await response.json();
      console.log(apiData);
      setTodos(apiData.todos || []);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    getUserfromApi();
  }, []);

  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  async function deleteTodo(todo_Id) {
    const response = await fetch(
      `https://playground.4geeks.com/todo/users/dwanedunn/todos/${todo_Id}`,
      {
        method: 'DELETE',
      }
    );
    if (!response.ok) {
      console.log('Failed to delete todo');
    }
    getUserfromApi();
  }

  return (
    <div>
      <h1>Todo List</h1>

      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>

      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
