import { useState, useEffect } from 'react';

export function App() {
  const [todos, SetTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  export addTodo = () => {
    if (newTodo.trim()) {
      SetTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };
}
