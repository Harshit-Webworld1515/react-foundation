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
    return (
        <div className="Item">
            <h4>{name}</h4>
            <p>Price: ${price/2}</p>
            <p>Quality: {quality}</p>
        </div>
    )
}
function Article({ para1, genre ,writer }) {
    return (
        <div className="Article">
            <h3>Article Heading</h3>
            <p>{para1}</p>
            <p>Genre: {genre}</p>
            <p>Writer: {writer.a || writer.b}</p>
            <Button text="like" />
            <Button text="dislike" />
        </div>
    )
}
// export { Product, Item }
export default Product;
export { Item, Article };