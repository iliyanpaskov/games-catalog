import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import "./HomeGameCard.css"


const HomeGameCard = ({
    game,
}) => {


    return (

        <div className="top-games-card">
            <img src={game.imageUrl} className="card-img-top" alt="Not found..." />
            <div className="card-body">
                <h3 className="card-title"> {game.title}</h3>
                <p className="card-text">Category: {game.category}</p>
                {/* TODO  Links..Edit and Comment */}
                <ul className="cards-btns-wrapper">
                    <li>
                        <Link to={`/details/${game._id}`} className="top-games-card-btn" >Details</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HomeGameCard;