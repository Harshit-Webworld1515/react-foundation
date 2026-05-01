import './App.css'
// import means bring this component from other files
import Title from './Title'
import { Description } from './Title'
// import Product from './Product'
import ProductTab from './ProductTab'
function App() {

  return (
    // <div className="App">
    <>
      <Title />
      <p>This is a simple React app.</p>
      <Description />
      <p>Calculating : 17*167={17 * 167}</p>
      <br />
      <ProductTab />
    </>
    // </div>
  )
}

export default App
