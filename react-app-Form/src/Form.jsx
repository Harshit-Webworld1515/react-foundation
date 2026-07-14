import { useState } from 'react'
import './Form.css'
export default function Form() {
  // const [inpValue, setinpValue] = useState('')
  const [inpValue, setinpValue] = useState(
    {
      user: "",
      email: ""
    }
  )
  const handleinpValueChange = (e) => {
    // setinpValue(e.target.value)
    setinpValue((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value
    }))
  }
  const handleSubmission = (e) => {
    e.preventDefault();

    console.log(`Name: ${inpValue.user}, Email: ${inpValue.email}`),
    setinpValue((prevValue) => ({
      ...prevValue,
      user: "",
      email: ""
    }))
  }
  //An input form element whose value is controlled by React in this way is called a "controlled component".
  return (
    <>
      <form onSubmit={handleSubmission} className="form">
        <h2 className="h2">My Form</h2>
        <label htmlFor="Name" className="label">Name: </label>
        <input type="text" id="Name" placeholder='Enter your name' onChange={handleinpValueChange} value={inpValue.user} name='user' className="input" />
        <br />
        {/* //handling Multiple Inputs */}
        <label htmlFor="Email" className="label">Email: </label>
        <input type="email" id="Email" placeholder='Enter your email' onChange={handleinpValueChange} value={inpValue.email} name='email' className="input" />
        <br />
        <button type="submit" className="button">Submit</button>
      </form>
    </>
  )
}