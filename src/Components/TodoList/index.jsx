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
        const newTodo = { task: inputValue, class: "" };
        setTodos([...todos, newTodo]);

        setInputValue("");
    };

    const handleTodoDelete = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const checkBox = (event, index) => {
        const updatedTodos = todos.map((todo, i) => {
            if (i === index) {
                return { ...todo, class: event.target.checked ? "strike" : "" };
            }
            return todo;
        });
        setTodos(updatedTodos);
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
                    <li key={index} className={todo.class}>
                        <input
                            type="checkbox"
                            onChange={(e) => {
                                checkBox(e, index);
                            }}
                        />
                        {todo.task}
                        <button onClick={() => handleTodoDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
