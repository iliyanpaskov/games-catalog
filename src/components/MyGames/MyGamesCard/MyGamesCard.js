import { Link } from "react-router-dom";

const MyGamesCard = ({
    game
}) => {

    return (
        <div className="top-games-card">
            <img src={game.imageUrl} className="card-img-top" alt="Not found..." />
            <div className="card-body">
                <h3 className="card-title"> {game.title}</h3>
                <p className="card-text">Category: {game.category}</p>
                {/* TODO  Links..Edit  */}
                <ul className="cards-btns-wrapper">
                    <li>
                    <Link to={`/data/games/${game._id}`} className="top-games-card-btn" >Details</Link>
                    </li>
                    <li>
                        <Link to="#" className="top-games-card-btn" >Edit</Link>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default MyGamesCard;