import './Product.css'
import Button from './Button';
import Price from './Price';
function Product() {
    return (
        <div className="Product">
            <h3>Product Component</h3>
            <h5>This is a product component.</h5>
        </div>
    )
}

//Props are used to pass data from one component to another component.
// Props are used to pass data from parent component to child component.

function Item({ name, price = 40, quality }) {
    console.log(name, price, quality)
    // 1st way of using conditional rendering in React
    if (quality == "bad") {
        return (
            <div className="Item">
                <h4>{name}</h4>
                <h6>Special Discount!</h6>
                <p>Price with discount: ${price / 2}</p>
                <p>Quality: {quality}</p>
            </div>
        )
    } else {
        return (
            <div className="Item">
                <h4>{name}</h4>
                <h6> Limited offer!</h6>
                <p>Price: ${price}</p>
                <p>Quality: {quality}</p>
            </div>
        )
    }
}
function Article({ para1, genre, writer, Liked }) {
    //to render an array of list items in React, we can use the map() method to iterate over the array
    const listItems = genre.map((item, index) => <li key={index}>{item}</li>);
    // adding inline  dynamic styles in React
    let condtion = Liked > 70
    let styles = {
        backgroundColor: condtion ? "lightgreen" : "",
    }
    return (
        <div className="Article" style={styles}>
            <h3>Article Heading</h3>
            <p>Genre:</p> <ul>{listItems}</ul>
            <p>{para1}</p>
            <p>Writer: {writer.a || writer.b}</p>
            <p>Liked: {Liked}</p>
            {/* Apply conditional rendering */}
            {condtion ? <p>"Trending"</p> : <a href="#">Read more</a>}
            <Button text="like" />
            <Button text="dislike" />
        </div>
    )
}
function Object({ title, idx }) {
    // let OldPrice = [100, 120, 150, 80][Math.floor(Math.random() * 4)]
    let OldPrice = [100, 120, 150, 80]
    let NewPrice = [80, 90, 70, 60]
    let description = [
        ["high-quality keyboard.","good for gamers"],
        ["Powerful laptop for professionals.","Great for creative work."],
        ["Compact and portable laptop.","Perfect for on-the-go productivity."],
        ["Sleek design excellent performance.","Experience the best of both worlds."]
    ]
    let desc = description[idx].map((item, index) => <p key={index}><ul><li>{item}</li></ul></p>)
    return (
        <div className="Object">
            <h3>{title}</h3>
            <p>{desc}</p>
            <Price OldPrice={OldPrice[idx]} NewPrice={NewPrice[idx]} />
        </div>
    )
}
// export { Product, Item }
export default Product;
export { Item, Article, Object };