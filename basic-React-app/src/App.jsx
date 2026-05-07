import './App.css'
// import means bring this component from other files
import Title from './Title'
import { Description } from './Title'
// import Product from './Product'
import ProductTab from './ProductTab'
import { Itemlist,ArticleTab, ObjectTab } from './ProductTab'
import MsgBox from './MsgBox'
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
      <br />
      <h1>Item List</h1>
      <Itemlist />
      <br />
      <h1>Article Tab</h1>
      <ArticleTab />
      <br />
      <h1>Message Box</h1>
      <MsgBox />
      <br />
      <h1 style={{ textAlign: "center" }}>Blockbuster deals Shop now!</h1>
      <ObjectTab />
    </>

    // </div>
  )
}

export default App
