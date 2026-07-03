import { useState } from 'react'
export default function Counter() {
    // let count = 0
    // this function not re-render the component, so the count willn't
    // update in the UI now using useState hook to update the count and re-render the component
    // function handleClick() {
    //     console.log("Button clicked")
    //     count++
    //     console.log(count)
    // }

    // this is the useState hook that will return an array with two elements
    //state declaration and initialization
    const [count, setCount] = useState(0)
    const [click, setClick] = useState(5)
    // setCount is a updater function that will update the count value and trigger re-rendering of the component
    function handleCount() {
        // setCount(count + 1) is an asynchronous function, it will update the count value and re-render the component 
        setCount(count + 1)
        console.log(count) // this will log the old count value because setCount is asynchronous, it will update the count value after the current function execution is completed
    }
    function handleClick() {
        //callback in state function 
        setClick((click) => {
            return click + 2;
        })
        setClick((click) => {
            return click + 3;
        })
    }
    return (
        <div className="Counter">
            <h2>No.of man: {count}</h2>
            <button onClick={handleCount}>count men</button>
            <p onClick={handleClick}> no. of clicks: {click}</p>
        </div>
    )
}
// count is a state variable that holds the current count value,
// and setCount is a function that updates the count value and triggers a re-render of the component.
// When the button is clicked, handleClick is called, which updates the count value using setCount, and then re-renders the component.