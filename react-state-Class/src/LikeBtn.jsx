import { useState } from 'react'
export default function LikeBtn() {
    // multiple states in a component
    const [isLiked, setIsLiked] = useState(false);
    const [clicks, setClicks] = useState(0);

    let toggleLike = () => {
        console.log("Like button clicked toggleLike");
        setIsLiked(!isLiked)
        setClicks(clicks + 1)
    }
    // inline style for the like button
    let likeStyle={color:"red"}
    return (
        <div className="LikeBtn">
            <p onClick={toggleLike}>
                {isLiked ? <i className="fa-solid fa-thumbs-up" style={likeStyle}></i> : <i className="fa-regular fa-thumbs-up"></i>}
                {clicks > 0 && <span>{clicks}</span>}
            </p>
        </div>
    )
}