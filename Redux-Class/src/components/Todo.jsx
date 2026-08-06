import { useSelector } from 'react-redux'
import AddForm from './AddForm'

export default function Todo() {
    const todos = useSelector((state) => state.todos);
    console.log(todos);
    return (
        <>
            <h1>Ready for Redux Todo</h1>
            <AddForm />
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.task} - {todo.isDone ? "Done" : "Not Done"}
                    </li>
                ))}
            </ul>
        </>
    )
}