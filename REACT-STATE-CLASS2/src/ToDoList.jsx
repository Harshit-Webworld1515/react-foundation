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
    //(_, i)likh diya.Matlab _  = item of array (ignore kar do) i = index Ye underscore sirf convention hai. Iska koi special meaning JavaScript me nahi hai.
    const deleteTask = (index) => {
        setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    };
    return (
        <div>
            <h1>To Do List</h1>
            <input type="text" value={inputValue} onChange={addTask} placeholder="Enter a new task..." />
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}><span>{task}</span>
                        &nbsp; &nbsp;
                        <button key={index} onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            <button onClick={newTask}>
                Add Task
            </button>
        </div>
    );
}