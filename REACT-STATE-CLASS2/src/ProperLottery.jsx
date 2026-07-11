import { genTicket,sum } from './helper'
import { useState } from "react";
import './Ticket.jsx';
import Ticket from './Ticket.jsx';
export default function ProperLottery({ num=4 , winningSum=17 }) {
    let [ticket, setTicket] = useState([]);
    // let winningMove = sum(ticket) === winningSum;
    let winningMove = winningSum(ticket);

    
    let buyTicket = () => {
        setTicket(genTicket(num));

    };
    return (
        <div>
            <h1>Lottery</h1>
            <Ticket num={ticket} />
            <button onClick={buyTicket}>buy New Ticket</button>
            {winningMove && <p>Congratulations! You won!</p>}
            {console.log("Winning Move:", winningMove)}
        </div>
    );
}