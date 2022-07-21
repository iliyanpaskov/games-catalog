import { Link } from "react-router-dom";
import "./HomeGameCard.css"

const HomeGameCard = () => {

    return (

        <div className="top-games-card">
            <img src="/images/black-knight.png" className="card-img-top" alt="image was not found..." />
            <div className="card-body">
                <h3 className="card-title">Card title</h3>
                <p className="card-text">Category.</p>
                {/* TODO  Links..... */}
                <ul className="cards-btns-wrapper">
                    <li>
                        <Link to="#" className="top-games-card-btn" >Details</Link>
                    </li>
                    <li>
                        <Link to="#" className="top-games-card-btn" >Details</Link>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default HomeGameCard;