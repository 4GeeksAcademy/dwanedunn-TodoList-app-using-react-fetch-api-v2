import { useState } from "react";

function App(){
    const [todos, SetTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    
export default addTodo = () => {
    if (newTodo.trim()) {
        SetTodos([...todos, { text: newTodo, completed: false }]);
        setNewTodo('');
    }
}
