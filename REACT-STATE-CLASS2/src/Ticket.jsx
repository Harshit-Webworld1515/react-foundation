import React from 'react';
import './Ticket.css';
import TicketNum from './TicketNum';
export default function Ticket({ num }) {
    return (
        <div className="Tickeet">
            <p>My Ticket</p>
            {num.map((num, idx) => (
                <TicketNum num={num} key={idx} />
            ))}
        </div>
    );
}