import './Product.css'
import Button from './Button';
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

function Item({ name, price=40, quality }) {
    console.log(name, price, quality)
    // 1st way of using conditional rendering in React
    if (quality=="bad") {
        return (
            <div className="Item">
            <h4>{name}</h4>
            <h6>Special Discount!</h6>
            <p>Price with discount: ${price/2}</p>
            <p>Quality: {quality}</p>
        </div>
    )
}else{
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
function Article({ para1, genre ,writer,Liked }) {
    const listItems = genre.map((item) => <li>{item}</li>);
    return (
        <div className="Article">
            <h3>Article Heading</h3>
            <p>Genre: <ul>{listItems}</ul></p>
            <p>{para1}</p>
            <p>Writer: {writer.a || writer.b}</p>
            <p>Liked: {Liked}</p>
            {/* Apply conditional rendering */}

            {Liked > 70 ? <p>"Trending"</p>: <a href="#">Read more</a>}
            <Button text="like" />
            <Button text="dislike" />
        </div>
    )
}
// export { Product, Item }
export default Product;
export { Item, Article };