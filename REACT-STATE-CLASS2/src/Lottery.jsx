import { useState } from "react";
import './Lottery.css';
import { genTicket,sum } from './helper'
export default function Lottery() {
    // const [ticket, setTicket] = useState([0, 0, 0]);
    let [ticket, setTicket] = useState(genTicket(3));

    let buyTicket=()=>{
        setTicket(genTicket(3))
    }
   const winningMove =sum(ticket) ===15;

    return (
        <div className="lottery">
            <h1>Lottery</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <br />
            <button onClick={buyTicket}>buy New Ticket</button>

            <p >{ winningMove ? "Congrats! finally you won Best wishes for upcoming lottery":"Not match try again"}</p>
        </div>
    )
}