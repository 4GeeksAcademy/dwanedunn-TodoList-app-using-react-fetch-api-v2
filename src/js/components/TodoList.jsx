import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          toggleTodo={() => toggleTodo(index)}
          deleteTodo={() => deleteTodo(index)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
