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
    const [count, setCount] = useState(0)
    // setCount is a updater function that will update the count value and trigger re-rendering of the component
    function handleClick() {
    // setCount(count + 1) is an asynchronous function, it will update the count value and re-render the component 
        setCount(count + 1)
        console.log(count) // this will log the old count value because setCount is asynchronous, it will update the count value after the current function execution is completed
    }
    return(
        <div className="Counter">
            <h2>No.of clicks: {count}</h2>
            <button onClick={handleClick}>count click</button>
        </div>
    )
}