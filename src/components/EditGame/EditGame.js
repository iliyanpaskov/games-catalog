import "./EditGame.css";

const EditGame = () => {
    const submitEdit = (e) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={submitEdit} className="edit-form">
            <div className="edit-wrapper">
                <h1>Edit Game:</h1>
                <label className="label" htmlFor="title">Game Title:</label>
                <input className="edit-input" type="title" name="title" placeholder="Needs to be filled ..."></input>
                <label className="label" htmlFor="category">Category:</label>
                <input className="edit-input" type="category" name="category" placeholder="Needs to be filled ..."></input>
                <label className="label" htmlFor="number">Max Level:</label>
                <input className="edit-input" type="number" name="number" placeholder="Needs to be filled ..."></input>
                <label className="label" htmlFor="img">Image:</label>
                <input className="edit-input" type="img" name="img" placeholder="Needs to be filled ..."></input>
                <label className="label" htmlFor="textarea">Summary:</label>
                <textarea className="edit-summary-input" type="textarea" name="textarea" placeholder="Needs to be filled ..."></textarea>
                <button type="submit" className="edit-button">Edit</button>
            </div>

        </form>
    )
}

export default EditGame;