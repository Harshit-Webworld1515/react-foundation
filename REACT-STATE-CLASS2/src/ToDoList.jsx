import React, { useState } from 'react';
export default function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const addTask = (event) => {
        setInputValue(event.target.value);
    };
    const newTask = () => {
        setTasks((prevTasks) => ([...prevTasks, inputValue]));
        setInputValue('');
    }
    return (
        <div>
            <h1>To Do List</h1>
            <input type="text" value={inputValue} onChange={addTask} placeholder="Enter a new task..." />
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
            <button onClick={newTask}>
                Add Task
            </button>
        </div>
    );
}