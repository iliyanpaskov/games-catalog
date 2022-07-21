import { Link } from "react-router-dom";
import "./CatalogGameCard.css"

const CatalogGameCard = () => {

    return (
        <div className="catalog-card" >
            <img src="https://cdn2.unrealengine.com/heroes-iii-complete-epic-edition-capsule-hero-carrousel-1920x1080-1920x1080-8dbed88694f1.jpg" className="catalog-card-img" alt="..." />
            <div className="card-body">
                <h2 className="card-game-title">Card title</h2>
                <p className="card-game-category">Category: Strategy</p>
                <p className="card-game-maxlvl">Max Level:  </p>
            </div>
            {/* TODO Buttons... */}
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
    )
}

export default CatalogGameCard;