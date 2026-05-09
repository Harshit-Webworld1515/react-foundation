import './Product.css'
function Button({ text }) {
    return (
        <>
        <button className="button1">{text}</button>
        </>
    );
}
function Button2( ) {
    return (
        <div className="button2">
        <button onClick={handleClick}>Click me</button>
        <p onMouseOver={handleMouseOver}>Ayodhya Naresh Siyavar Ramchandra ki jai🙌🦾💪✊</p>
        <button onDoubleClick={handleDoubleClick}>Double Click</button>
        </div>
    );

}
function handleClick( ) {
    console.log("Hmre Raja Ram ji ki jai");
}
function handleMouseOver( ) {
    console.log("Jai Shri Ram");
}
function handleDoubleClick( ) {
    console.log("Double clicked!");
}
export default Button;
export { Button2 };