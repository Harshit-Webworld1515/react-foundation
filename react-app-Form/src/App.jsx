import { useState } from 'react'
import './App.css'
import Form from './Form.jsx'
import CommentForm from './CommentForm'
import Counter from './Countereffect'
import Joker from './Joker'

function App() {
  return (
    <div className="App">
      <h1>React Form</h1>
      <p>An input form element whose value is controlled by React in this way is called a "controlled component". .</p>
      <Form />
      <hr />
      <CommentForm/>
      <hr />
      <h2>Counter with useEffect</h2>
      <Counter />
      <hr />
      <Joker />
    </div>
  )
}

export default App
