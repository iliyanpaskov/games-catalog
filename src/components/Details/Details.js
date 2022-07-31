import SingleComment from "./SingleComment/SingleComment.js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import * as gamesServices from "../../services/gamesService.js";
import * as userServices from "../../services/userService.js";
import "./Details.css";

const Details = ({
    match
}) => {
    const [game, setGame] = useState({});
    const [comments, setComments] = useState([])
    const { user } = useContext(AuthContext);
    const historyHook = useHistory();

    useEffect(() => {
        const gameDetails = async () => {
            let result = await gamesServices.getOneGame(match.params.id);
            setGame(result);
        }
        gameDetails();
    }, [match.params.id]);

    useEffect(() => {
        if (user.accessToken) {
            const gameComents = async () => {
                let result = await userServices.getGameComments(user.accessToken, match.params.id);
                setComments(result);
            }
            gameComents();
        }
    }, [user.accessToken, match.params.id]);


    const delGame = () => {
        userServices.deleteGame(user.accessToken, game._id);
        historyHook.push("/my-games")
    }


    const ownerBtns = () => {
        return (
            <>
                <li>
                    <Link to={`/edit/${game._id}`} className="game-details-btn" >Edit</Link>
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
                    <Link to={`/comment/${game._id}`} className="game-details-btn" >Comment</Link>
                </li>
            )
        }
    }

    const currntGameComments = () => {
        if (comments) {
            return (
                <>
                    <h2 className="comments-title">Comments:</h2>
                    <ul className="comments-list">
                        {comments.map(x => <SingleComment key={x._id} game={x} />)}
                    </ul>
                </>
            )
        }
    }

    const noCommentsYet = () => {
        if (user.accessToken && user._id !== game._ownerId) {
            return (
                <h3 className="no-comments"> No comments yet! You can be first!</h3>
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
            <div className="comments-box">
                {
                    comments.length > 0
                        ? currntGameComments()
                        : noCommentsYet()
                }
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