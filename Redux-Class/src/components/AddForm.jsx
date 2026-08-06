import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

export default function AddForm() {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();
    function submitTask(e) {
        e.preventDefault();
        console.log(task);
        dispatch(addTodo(task));
        setTask("");
    }
    return (
        <div>
            <form onSubmit={submitTask}>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Enter a new task"
                />
                <br />
                <button>Submit Your Task</button>
            </form>
        </div>
    )
}