import { Link } from "react-router-dom";
import "./HomeGameCard.css"
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";


const HomeGameCard = ({
    game,
}) => {
    const { user } = useContext(AuthContext);

    return (

        <div className="top-games-card">
            <img src={game.imageUrl} className="card-img-top" alt="Not found..." />
            <div className="card-body">
                <h3 className="card-title">Card title: {game.title}</h3>
                <p className="card-text">Category: {game.category}</p>
                {/* TODO  Links..... */}
                <ul className="cards-btns-wrapper">
                    <li>
                        <Link to="#" className="top-games-card-btn" >Details</Link>
                    </li>
                    <li>
                        <Link to="#" className="top-games-card-btn" >Comment</Link>
                    </li>
                    <li>
                        <Link to="#" className="top-games-card-btn" >Edit</Link>
                    </li>
                    <li>
                        <Link to="#" className="top-games-card-btn" >Delete</Link>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default HomeGameCard;