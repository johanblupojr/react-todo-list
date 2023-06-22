import React, { useState } from "react";
import "./styles.css";

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (!inputValue.trim()) {
            return;
        }
        const newTodo = { task: inputValue, isDone: "" };
        setTodos([...todos, newTodo]);

        setInputValue("");
    };

    const handleTodoDelete = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const checkBox = (e) => {
        // console.log(e.target.id, e.target.checked);
        const current = todos;
        current[0].isDone = e.target.checked ? "strike" : "";
        setTodos(current);
        console.log(current);
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <form onSubmit={handleFormSubmit}>
                <input type="text" value={inputValue} onChange={handleInputChange} />
                <button type="submit">Add</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index} className={todo.isDone}>
                        <input type="checkbox" onChange={checkBox} id={index} />
                        {todo.task}
                        <button onClick={() => handleTodoDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
