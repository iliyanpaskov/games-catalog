import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import "./CatalogGameCard.css"


const CatalogGameCard = ({
    game
}) => {

    const { user } = useContext(AuthContext);

    const userButtons = () => {
        if (user._id) {
            return (
                <>
                    <li>
                        <Link to="#" className="top-games-card-btn" >Details</Link>
                    </li>
                    <li>
                        <Link to="#" className="top-games-card-btn" >Comment</Link>
                    </li>
                </>
            )
        }
    }

    const ownerButtons = () => {
        return (
            <>
                <li>
                    <Link to="#" className="top-games-card-btn" >Edit</Link>
                </li>
                <li>
                    <Link to="#" className="top-games-card-btn" >Delete</Link>
                </li>
            </>
        )
    }


    return (
        <div className="catalog-card" >
            <img src={game.imageUrl} className="catalog-card-img" alt="NO IMAGE FOUND" />
            <div className="card-body">
                <h2 className="card-game-title">{game.title}</h2>
                <p className="card-game-category">Category: {game.category}</p>
                <p className="card-game-maxlvl">Max Level: {game.maxLevel} </p>
            </div>
            {/* TODO Buttons... */}
            <ul className="cards-btns-wrapper">
                {user._id === game._ownerId
                    ? ownerButtons()
                    : userButtons()
                }
            </ul>
        </div>
    )
}

export default CatalogGameCard;