import Message from "./Msg";
function MsgBox() {
    return (
        <div className="message-box-container">
            <Message User="Harshit" textColor="white" />
            <Message User="Rohit" textColor="black" />
            <Message User="Satyarth" textColor="yellow" />
            <Message User="Jahanvi" textColor="blue" />
            
        </div>
    );
}
export default MsgBox;