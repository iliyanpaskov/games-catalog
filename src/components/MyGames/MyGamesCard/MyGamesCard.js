import { Link } from "react-router-dom";
import "./MyGamesCard.css"

const MyGamesCard = ({
    game
}) => {

    return (
        <div className="my-games-card">
            <img src={game.imageUrl} className="my-card-img" alt="Not found..." />
            <div className="my-card-body">
                <h3 className="my-card-title"> {game.title}</h3>
                <p className="my-card-text">Category: {game.category}</p>
                {/* TODO  Links..Edit and Comment */}
                <ul className="my-cards-btns-wrapper">
                    <li>
                    <Link to={`/data/games/${game._id}`} className="my-games-card-btn" >Details</Link>
                    </li>
                    <li>
                        <Link to="#" className="my-games-card-btn" >Edit</Link>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default MyGamesCard;