import { useState, useEffect } from 'react';
import TodoList from './TodoList';
import { resolveConfig } from 'vite';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo('');
  };

  // Fetch the todos from api on load

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
      const apiData = await resp.json();
      console.log(apiData);
    } catch (error) {
      console.log(error.message);
    } finally {
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

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

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
