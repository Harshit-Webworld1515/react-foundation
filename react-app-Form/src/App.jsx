import { useState } from 'react'
import './App.css'
import Form from './Form.jsx'
import CommentForm from './CommentForm'

function App() {
  return (
    <div className="App">
      <h1>React Form</h1>
      <p>An input form element whose value is controlled by React in this way is called a "controlled component". .</p>
      <Form />
      <hr />
      <CommentForm/>
    </div>
  )
}

export default App
