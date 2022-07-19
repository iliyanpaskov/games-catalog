import { Link } from "react-router-dom";
import "./HomeGameCard.css"

const HomeGameCard = () => {

    return (

        <div className="card" id="home-card" >
            <img src="/images/Diablo_II_Coverart.png" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                <Link to="#" className="btn btn-primary" id="card-button">Details</Link>
                <Link to="#" className="btn btn-primary" id="card-button">Details</Link>

            </div>
        </div>
    )
}

export default HomeGameCard;