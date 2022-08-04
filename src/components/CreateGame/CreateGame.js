import { useHistory } from "react-router-dom";
import { isAuthenticated } from "../../hoc/isAuthenticated.js";
import * as userServices from "../../services/userService.js"
import { toast, Zoom } from 'react-toastify';
import "./CreateGame.css";
import 'react-toastify/dist/ReactToastify.css';

const CreateGame = ({
    user
}) => {
    const historyHook = useHistory();

    const submitCreate = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const [title, category, maxLevel, imageUrl, summary] = formData.values();
        if (title !== "" && category !== "" && maxLevel !== "" && imageUrl !== "" && summary !== "") {
            userServices.createGame(user.accessToken, title, category, maxLevel, imageUrl, summary)
                .then(() => {
                    toast.success('Game added to the catalog !', {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        transition: Zoom,
                        theme: "dark"
                    });
                    historyHook.push("/catalog");
                }).catch(err => {
                    toast.error(err, {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        transition: Zoom,
                        theme: "dark"
                    });
                })
        } else {
            toast.error("All fields must be filled !", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                transition: Zoom,
                theme: "dark"
            });
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
                <label className="label" htmlFor="url">Image:</label>
                <input className="create-input" type="url" name="url" placeholder="Needs to be filled ..."></input>
                <label className="label" htmlFor="textarea">Summary:</label>
                <textarea className="summary-input" type="textarea" name="textarea" placeholder="Needs to be filled ..."></textarea>
                <button type="submit" className="create-button">Add Game</button>
            </div>
        </form>
    )
}

export default isAuthenticated(CreateGame);