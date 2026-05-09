function Price({ OldPrice, NewPrice }) {
    // let discount = ((OldPrice - NewPrice) / OldPrice) * 100
    const Oldstyles = {
        textDecoration: "line-through",
        color: "red",
    }
    const Newstyles = {
        color: "green",
        fontWeight: "bold",

    }
    let styles = {
        display: "flex",
        gap: "10px",
        alignItems: "center",
        backgroundColor: "#ffe796",
        borderRadius: "5px",
        width: "300px",
        height: "40px",
        borderBottomRightRadius: "25px",
        borderBottomLeftRadius: "25px",
    }
    return (
         <div className="Price" style={styles}>
            <span style={Oldstyles}>Old Price: ${OldPrice.toFixed(2)}</span>
                &nbsp;&nbsp;
            <span style={Newstyles}>New Price: ${NewPrice.toFixed(2)}</span>
              
        </div>
    )
}
export default Price;