import * as gamesServices from "../../services/gamesService.js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import * as userServices from "../../services/userService.js";
import "./Details.css";

const Details = ({
    match
}) => {
    const [game, setGame] = useState({});
    const { user } = useContext(AuthContext);
    const historyHook = useHistory();

    useEffect(() => {
        const gameDetails = async () => {
            let result = await gamesServices.getOneGame(match.url);
            setGame(result);
        }
        gameDetails();
    }, [])

    const delGame = () => {
        userServices.deleteGame(user.accessToken, game._id);
        historyHook.push("/catalog")
    }

    const ownerBtns = () => {
        return (
            <>
                <li>
                    <Link to="#" className="game-details-btn" >Edit</Link>
                </li>
                <li>
                    <Link to="#" className="game-details-btn" onClick={delGame} >Delete</Link>
                </li>
            </>
        )
    }

    const userBtn = () => {
        if (user._id) {
            return (
                <li>
                    <Link to="#" className="game-details-btn" >Comment</Link>
                </li>
            )
        }
    }

    return (
        <div className="details-box">
            <div className="title-box">
                <h1 className="details-title">{game.title}</h1>
            </div>

            <div className="info">
                <div className="game-img-box">
                    <img src={game.imageUrl} className="details-img" alt="No img found" />
                </div>
                <div className="game-info-box">
                    <ul className="game-info-list">
                        <li className="game-li">Category: {game.category}</li>
                        <li className="game-li">Max Level: {game.maxLevel}</li>
                        <li className="game-li">Category: {game.category}</li>
                        <li className="game-li">Description: {game.summary}</li>
                    </ul>
                </div>
            </div>
            <div className="details-btns-wrapper">
                {
                    user._id === game._ownerId
                        ? ownerBtns()
                        : userBtn()
                }
            </div>
        </div>
    )
}

export default Details;