import { useState } from 'react'
import './App.css'
export default function Form() {
  const [inpValue, setinpValue] = useState('')
  const handleinpValueChange = (e) => {
    setinpValue(e.target.value)
  }
//An input form element whose value is controlled by React in this way is called a "controlled component".
  return (
    <>
      <form action="">
        <h2>My Form</h2>
        <label htmlFor="Name">Name: </label>
        <input type="text" id="Name" placeholder='Enter your name' onChange={handleinpValueChange} value={inpValue} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}