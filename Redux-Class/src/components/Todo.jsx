import { useSelector } from 'react-redux'
import AddForm from './AddForm'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../features/todo/todoSlice';


export default function Todo() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    console.log(todos);

    const deleteList = (todo) => {
        dispatch(deleteTodo(todo.id));
    };
    return (
        <>
            <h1>Ready for Redux Todo</h1>
            <AddForm />
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.task} - {todo.isDone ? "Done" : "Not Done"}
                        &nbsp; &nbsp; &nbsp; <button onClick={()=> deleteList(todo)} >Delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}