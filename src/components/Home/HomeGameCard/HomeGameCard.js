import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import "./HomeGameCard.css"


const HomeGameCard = ({
    game,
}) => {
    const { user } = useContext(AuthContext);


    const userButton = () => {
        if (user._id) {
            return (
                <li>
                    <Link to="#" className="top-games-card-btn" >Comment</Link>
                </li>
            )
        }
    }

    const ownerButton = () => {
        return (
            <li>
                <Link to="#" className="top-games-card-btn" >Edit</Link>
            </li>
        )
    }

    return (

        <div className="top-games-card">
            <img src={game.imageUrl} className="card-img-top" alt="Not found..." />
            <div className="card-body">
                <h3 className="card-title"> {game.title}</h3>
                <p className="card-text">Category: {game.category}</p>
                {/* TODO  Links..Edit and Comment */}
                <ul className="cards-btns-wrapper">
                    <li>
                        <Link to={`/data/games/${game._id}`} className="top-games-card-btn" >Details</Link>
                    </li>
                    {user._id === game._ownerId
                        ? ownerButton()
                        : userButton()
                    }
                </ul>
            </div>
        </div>
    )
}

export default HomeGameCard;