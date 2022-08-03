import "./Home.css"
import HomeGameCard from "./HomeGameCard/HomeGameCard";
import useFetch from "../../hooks/useFetch";


const Home = () => {
    const games = useFetch();

    return (
        <>
            <div className="home-page">
                <div className="title">
                    <h1 className="home-message">BEST OLD GAMES COLLECTION</h1>
                </div>
                <img className="home-page-img" src="/images/Diablo_II_Coverart.png" alt="Not found" />
            </div>
            <h1 className="top-games-title">Soon Added Games:</h1>
            <div className="top-games-list">
                {games.length > 0
                    ? games.slice(0, 3).map(x => <HomeGameCard key={x._id} game={x} />)
                    : <p className="no-games-added"> There are no games added !</p>
                }
            </div>
        </>
    )
};

export default Home;