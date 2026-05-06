function Message({ User, textColor }) {
    const styles = {
        backgroundColor: "red",
        color: textColor 
    };
    return (
        <div className="message-box" style={styles}>
            <h4> Hello, {User}!</h4>
        </div>
    );
}
export default Message