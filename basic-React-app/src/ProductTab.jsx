import Product, { Item , Article} from "./Product"
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
    return (
        <div>
            <Item name={name1} price={price} />
            <Item name={name2} price={120} />
            <Item name={name3} />
        </div>
    )
}
function ArticleTab() {
    let para1 = "Sources in the Bangladesh Nationalist Party (BNP) said that Mr. Sarma’s remarks indicate that there is a segment in India that does not want restoration of ties. “We follow a ‘Bangladesh first’ foreign policy which is an official foreign policy of the BNP government and such comments that undermine our sovereignty will not be tolerated,” said a source in Dhaka."
    let para2 = "The BNP has been in power for three terms since 1991 and has been in opposition for two terms. The party is currently in opposition and is facing a political crisis after the arrest of its leader, Khaleda Zia, on corruption charges. The party has been demanding the release of its leader and has been protesting against the government."
    return (
        <div>
            <Article para1={para1} />
            <Article para1={para2}  />
        </div>
    )
}

export default ProductTab
export { Itemlist, ArticleTab }