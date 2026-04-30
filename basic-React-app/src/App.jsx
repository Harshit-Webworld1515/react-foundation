import './App.css'
// import means bring this component from other files
import Title from './Title'
import { Description } from './Title'
function App() {

  return (
    // <div className="App">
    <>
      <Title />
      <p>This is a simple React app.</p>
      <Description />
    </>
    // </div>
  )
}

export default App
