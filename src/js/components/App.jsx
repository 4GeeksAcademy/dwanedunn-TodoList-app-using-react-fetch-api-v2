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

  async function getApiTodos() {
    const url = `https://playground.4geeks.com/todo/users/dwanedunn`;
    try {
      const resp = await fetch(url);

      if (!resp.ok) {
        throw new Error(`response Status: ${resolveConfig.status}`);
      }
      const apiData = await resp.json();
      console.log(apiData);
    } catch (error) {
      console.log(error.message);
    } finally {
    }
  }
  useEffect;

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
