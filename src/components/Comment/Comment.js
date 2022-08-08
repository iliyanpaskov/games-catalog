import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import * as userServices from "../../services/userService.js"
import { errorNotification, successNotification } from "../../services/notificationService";
import "./Comment.css";


const Comment = ({
    match
}) => {
    const { user } = useContext(AuthContext);
    const historyHook = useHistory()

    const submitComment = async (e) => {
        e.preventDefault();
        let id = match.params.id;

        const formData = new FormData(e.currentTarget);
        const comment = formData.get("textarea");
        if (comment !== "") {
            const result = await userServices.addComment(user.accessToken, id, comment);
            successNotification('Comment successfully added !');
            historyHook.push(`/details/${id}`)
            return (result);

        } else {
            errorNotification("You can't add empty comment !");
        }
    }

    return (
        <form className="add-comment-box" onSubmit={submitComment} >
            <div className="add-comment-wrapper">
                <label className="comment-label" htmlFor="textarea">Comment</label>
                <textarea className="comment-input" type="textarea" name="textarea" placeholder="comment ..."></textarea>
                <button type="submit" className="add-comment-btn" > Add Comment</button>
            </div>
        </form>
    );
}

export default Comment;