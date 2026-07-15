import './CommentForm.css';
import { useState } from "react";
export default function CommentForm() {
    const [comment, setComment] = useState({
        username: "",
        comment: "",
        rating: ""
    });
    const [reviews,setReviews]=useState([
        {
            name:"xyz",
            pov:"Panormic view of mountains",
            star:"4"
        }
    ])

    const handleComment = (e) => {
        setComment((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    const justSubmit = (e) => {
        e.preventDefault();
        console.log(comment);
        setReviews((prevrev)=>(
            [
            ...prevrev,
            {name:comment.username,
            pov: comment.comment,
            star: comment.rating}
        ]
        ))
        setComment({
            username: "",
            comment: "",
            rating: ""
        });
    }
    return (
        <div className="comment-container">
            <h1>Comment Box</h1>
            <form onSubmit={justSubmit}>
                <label htmlFor="username">Username: </label>
                <input
                    type="text"
                    placeholder="@manMis"
                    name="username"
                    id="username"
                    onChange={(handleComment)}
                    value={comment.username} />
                <br /> <br />
                <label htmlFor="comment">Comment: </label>
                <textarea
                    id="comment"
                    name="comment"
                    placeholder="Write your comment here..."
                    value={comment.comment}
                    onChange={(handleComment)}
                    rows={5}
                    cols={30}
                />
                <br /> <br />
                <div className="form-group">
                    <label htmlFor="rating">Rating:</label>
                    <input
                        type="number"
                        min={1}
                        max={5}
                        onChange={(handleComment)}
                        value={comment.rating}
                        name="rating"
                        className="rating"
                    />
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>

            <hr />
            <h2>Comments:</h2>
            <ul>
                {reviews.map((review, index) => (
                    <li key={index}>
                        <strong>Username:</strong> {review.name}
                        <br />
                        <strong>Comment:</strong> {review.pov}
                        <br />
                        <strong>Rating:</strong> {review.star}
                    </li>
                ))}
            </ul>
        </div>
    );
}