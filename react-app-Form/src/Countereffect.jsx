import React, { useState,useEffect } from 'react';
export default function Counter() {
    const [count, setCount] = useState(0);
    const[square,setSquare]=useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    }
    const calculateSquare = () => {
        setSquare(count * count);
    }
    useEffect(() => {
        console.log(`Count has changed to: ${count}`);
    }, [square]);
  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <p>Square: {square}</p>
      <button onClick={calculateSquare}>Calculate Square</button>
      <br />
      <br />
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}