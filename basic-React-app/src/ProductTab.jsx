import Product, { Item , Article, Object} from "./Product"
function ProductTab() {
    return (
        <>
            <h1>Product Tab</h1>
            <Product />
            <Product />
            <Product />
        </>
    )
}
function Itemlist() {
    let name1 = "Groceries"
    let name2 = "gadget accessories"
    let name3 = " clothing items"
    let price = 100
    let quality = { a: "good", b: "bad", c: "average" }
    return (
        <div>
            <Item name={name1} price={price} quality={quality.a} />
            <Item name={name2} price={120} quality={quality.b} />
            <Item name={name3} price={150} quality={quality.c}  />
        </div>
    )
}
function ArticleTab() {
    let para1 = "Sources in the Bangladesh Nationalist Party (BNP) said that Mr. Sarma’s remarks indicate that there is a segment in India that does not want restoration of ties. “We follow a ‘Bangladesh first’ foreign policy which is an official foreign policy of the BNP government and such comments that undermine our sovereignty will not be tolerated,” said a source in Dhaka."
    let para2 = "The BNP has been in power for three terms since 1991 and has been in opposition for two terms. The party is currently in opposition and is facing a political crisis after the arrest of its leader, Khaleda Zia, on corruption charges. The party has been demanding the release of its leader and has been protesting against the government."
    // Rendering an array of list items in React
    // let category = [ <li> "News" </li>, <li> "Politics" </li>, <li> "Sports" </li>, <li> "Entertainment" </li> ]
    let category = ["News", "Politics", "Sports", "Entertainment"]
    return (
        <div>
            <Article para1={para1} genre={[category[0]]} writer={{a:"Harshit Tiwari"}} Liked={78}/>
            <Article para1={para2} genre={category} writer={{b:"Jahanvi Gupta"}} Liked={59} />
        </div>
    )
}
function ObjectTab(){
    const styles = {
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
    }
    return (
        <div className="ObjectTab" style={styles}>
            <Object title="Logitech Keyboard" idx={0} />
            <Object title="Apple MacBook Pro" idx={1} />
            <Object title="Dell XPS 13" idx={2} />
            <Object title="HP Spectre x360" idx={3} />
        </div>
    )
}

export default ProductTab
export { Itemlist, ArticleTab, ObjectTab }