
import "./SingleComment.css"

const SingleComment = ({
    game
}) => {
    return (
        <div className="current-comment-box">
            <p className="comment">{game.comment} </p>
        </div>
    )
}

export default SingleComment;