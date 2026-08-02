import {useSelector} from 'react-redux'
export default function Todo() {
    const todos = useSelector((state) => state.todos);
    console.log(todos);
    return(
        <>
        <h1>Ready for Redux Todo</h1>
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