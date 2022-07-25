import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import * as userServices from "../../services/userService.js"
import "./CreateGame.css";

const CreateGame = () => {
    const { user } = useContext(AuthContext)
    const historyHook = useHistory();

    const submitCreate = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const [title, category, maxLevel, imageUrl, summary] = formData.values();
        if (title !== "" && category !== "" && maxLevel !== "" && imageUrl !== "" && summary !== "") {
            userServices.createGame(user.accessToken, title, category, maxLevel, imageUrl, summary)
                .then(() => {
                    historyHook.push("/catalog");
                }).catch(err => {
                    alert(err?.message)
                })
        } else {
            alert("All fields must be filled!")
        }
    }

    return (
        <form onSubmit={submitCreate} className="create-form">
            <div className="create-wrapper">
                <h1>Add New Game:</h1>
                <label className="label" htmlFor="title">Game Title:</label>
                <input className="create-input" type="title" name="title" placeholder="Needs to be filled ..."></input>
                <label className="label" htmlFor="category">Category:</label>
                <input className="create-input" type="category" name="category" placeholder="Needs to be filled ..."></input>
                <label className="label" htmlFor="number">Max Level:</label>
                <input className="create-input" type="number" name="number" placeholder="Needs to be filled ..."></input>
                <label className="label" htmlFor="img">Image:</label>
                <input className="create-input" type="img" name="img" placeholder="Needs to be filled ..."></input>
                <label className="label" htmlFor="textarea">Summary:</label>
                <textarea className="summary-input" type="textarea" name="textarea" placeholder="Needs to be filled ..."></textarea>
                <button type="submit" className="create-button">Add Game</button>
            </div>
        </form>
    )
}

export default CreateGame;