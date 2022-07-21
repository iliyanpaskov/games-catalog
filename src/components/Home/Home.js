import "./Home.css"
import HomeGameCard from "./HomeGameCard/HomeGameCard";
import { useState, useEffect } from "react";
import * as gamesServices from "../../services/gamesService.js"

const Home = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const lastAddedGames = async () => {
            let result = await gamesServices.getLastAddedGames();
            // console.log(Object.values(result));
            setGames(Object.values(result))
        }
        lastAddedGames();
        // console.log(games);
    }, []);

    return (
        <>
            <div className="home-page">
                <div className="title">
                    <h1 className="home-message">BEST OLD GAMES COLLECTION</h1>
                </div>
                <img className="home-page-img" src="/images/Diablo_II_Coverart.png" alt="No img found" />
            </div>
            <h1 className="top-games-title">Soon Added Games:</h1>
            <div className="top-games-list">
                {games.length > 0
                    ? games.slice(games.length-3).map(x => <HomeGameCard key={x._id} game={x}/>)
                    : <p className="no-games-added"> There are no games added !</p>
                }

            </div>
        </>



    )
};

export default Home;