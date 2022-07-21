import { Link } from "react-router-dom";
import "./HomeGameCard.css"

const HomeGameCard = ({
    game,
}) => {

    return (

        <div className="top-games-card">
            <img src={game.imageUrl} className="card-img-top" alt="image was not found..." />
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
                        <Link to="#" className="top-games-card-btn" >Delete</Link>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default HomeGameCard;