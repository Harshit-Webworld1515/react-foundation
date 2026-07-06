import React, { useState } from 'react';
export default function ToDoList() {
    const [tasks, setTasks] = useState([{ id: 0, taskName: 'Sample Task', isDone: false }]);
    const [inputValue, setInputValue] = useState('');
    const addTask = (event) => {
        setInputValue(event.target.value);
    };
    const newTask = () => {
        const nextId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
        setTasks((prevTasks) => ([...prevTasks,
        { id: nextId, taskName: inputValue, isDone: false }
        ]));
        setInputValue('');
    }
    //(_, i)likh diya.Matlab _  = item of array (ignore kar do) i = index Ye underscore sirf convention hai. Iska koi special meaning JavaScript me nahi hai.
    const deleteTask = (task) => {
        setTasks((prevTasks) => prevTasks.filter((t) => t !== task));
    };
    const upperCase = () => {
        setTasks((prevTasks) =>
            prevTasks.map((task) => ({
                ...task,
                taskName: task.taskName.toUpperCase(),
            }))
        );
    };
    const capsLock = (task) => {
        setTasks((prevTasks) => prevTasks.map((t) => {
            if (t === task) {
                return { ...task, taskName: task.taskName.toUpperCase() };
            }
            return t;
        }));
    }
    const workDone = (task) => {
        setTasks((prevTasks) => prevTasks.map((t) => {
            if (t === task) {
                return { ...task, isDone: !task.isDone };
            }
            return t;
        }));
    }
    return (
        <div>
            <h1>To Do List</h1>
            <input type="text" value={inputValue} onChange={addTask} placeholder="Enter a new task..." />
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
                        <span>{task.taskName}</span>
                        &nbsp; &nbsp;
                        <button onClick={() => deleteTask(task)}>
                            Delete
                        </button>
                        &nbsp; &nbsp;
                        <button onClick={() => capsLock(task)}>
                            Uppercase
                        </button>
                        &nbsp; &nbsp;
                        <button onClick={()=>workDone(task)}>marked as Done</button>
                    </li>
                ))}
            </ul>
            <br />
            <button onClick={upperCase}>
                Update to upper case
            </button> <br />
            <button onClick={newTask}>
                Add Task
            </button>
        </div>
    );
}