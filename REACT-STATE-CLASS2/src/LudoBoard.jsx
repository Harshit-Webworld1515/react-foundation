import {useState} from "react";
export default function LudoBoard() {
    // const [blueMoves, setBlueMoves] = useState(0);
    // const [redMoves, setRedMoves] = useState(0);
    // const [greenMoves, setGreenMoves] = useState(0);
    // const [yellowMoves, setYellowMoves] = useState(0);
    
    // object state 
    const [Moves, setMoves] = useState({blue: 0 , red: 0, green: 0, yellow: 0});
    let updateBlueMoves = () => {
        setMoves((prevMove) => ({...prevMove, blue: prevMove.blue + 1}));
    }   
    let updateRedMoves = () => {
        setMoves((prevMoves) => ({...prevMoves, red: prevMoves.red + 1}));
    }
    let updateGreenMoves = () => {
        setMoves((prevMoves) => ({...prevMoves, green: prevMoves.green + 1}));
    }
    let updateYellowMoves = () => {
        setMoves((prevMoves) => ({...prevMoves, yellow: prevMoves.yellow + 1}));
    }   
    return (
        <div>
            <h1>Ludo Board</h1>
            <div className="board">
                <p>blue moves= {Moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlueMoves}>+1</button>
                <p>yellow moves= {Moves.yellow}</p>
                <button style={{backgroundColor:"yellow"}} onClick={updateYellowMoves}>+1</button>
                <p>green moves= {Moves.green}</p>
                <button style={{backgroundColor:"green"}} onClick={updateGreenMoves }>+1</button>
                <p>red moves= {Moves.red}</p>
                <button style={{backgroundColor:"red"}} onClick={updateRedMoves}>+1</button>
            </div> 
        </div>
    )
}