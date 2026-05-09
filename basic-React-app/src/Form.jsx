export default function Form() {
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your name" />
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Submit</button>
        </form>
    );
}
// event object contains all the information about the event that occurred, such as the type of event, the target element, and any additional data associated with the event. 
function handleSubmit(event) {
    console.log("Event:", event);
    console.log("Form submitted!");
    event.preventDefault();
    const name = event.target.elements[0].value;
    const email = event.target.elements[1].value;
    console.log("Name:", name);
    console.log("Email:", email);
}
