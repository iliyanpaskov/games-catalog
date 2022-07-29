import { useEffect, useState } from "react";
import * as gamesService from "../../services/gamesService";
import "./EditGame.css";

const EditGame = ({
    match
}) => {
    const [game, setGame] = useState({});

    useEffect(() => {
        const gameToChange = async () => {
            let result = await gamesService.getOneGame(match.params.id)
            setGame(result)
        }
        gameToChange();
    }, []);


    const submitEdit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const [title,category,maxLevel,imageUrl,summary] = formData.values();
        console.log(e.currentTarget);
    }
    return (
        <form onSubmit={submitEdit} className="edit-form">
            <div className="edit-wrapper">
                <h1>Edit Game:</h1>
                <label className="label" htmlFor="title">Game Title:</label>
                <input className="edit-input" type="text" name="title" placeholder="Needs to be filled !" defaultValue={game.title}></input>
                <label className="label" htmlFor="category">Category:</label>
                <input className="edit-input" type="text" name="category" placeholder="Needs to be filled !" defaultValue={game.category}></input>
                <label className="label" htmlFor="number">Max Level:</label>
                <input className="edit-input" type="number" name="number" placeholder="Needs to be filled !" defaultValue={game.maxLevel}></input>
                <label className="label" htmlFor="url">Image:</label>
                <input className="edit-input" type="url" name="imageUrl" placeholder="Needs to be filled !" defaultValue={game.imageUrl}></input>
                <label className="label" htmlFor="textarea">Summary:</label>
                <textarea className="edit-summary-input" type="textarea" name="summary" placeholder="Needs to be filled !" textarea defaultValue={game.summary}></textarea>
                <button type="submit" className="edit-button">Edit</button>
            </div>
        </form>
    )
}

export default EditGame;