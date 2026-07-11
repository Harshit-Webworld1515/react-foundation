import './App.css'
import LudoBoard from './LudoBoard'
import TodoList from './TodoList'
import Lottery from './Lottery'
import Ticket from './Ticket'
import ProperLottery from './ProperLottery'
import { genTicket,sum } from './helper'
function App() {
  let winCondition = (ticketInfo)=>{
    // let boolean = sum(ticketInfo)=== 15;
    let boolean = ticketInfo.every((num) => num % 2 === 0);
    return boolean;
  };
  return (
    <>
      <LudoBoard />
      <TodoList />  
      <hr /> <hr />
      <Lottery /> 
      <hr /> 
      {/* <Ticket num={[7, 9, 4]} />    */}
      {/* <Ticket num={[ 9, 2, 5, 8, 1]} />    */}


      {/* <Ticket num={[9]} />   
      <Ticket num={[4]} />    */}
      {/* <ProperLottery num={5} winningSum={25} /> */}
      {/* <ProperLottery num={3} winningSum={15} /> */}

      {/* function passes in props */}
      <ProperLottery num={5} winningSum={winCondition} />

    </>
  )
}

export default App
