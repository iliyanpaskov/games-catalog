import "./Home.css"
import HomeGameCard from "./HomeGameCard/HomeGameCard";

const Home = () => {

    return (
        <>
            <div className="home-page">
                <div className="title">
                    <h1 className="home-message">BEST OLD GAMES COLLECTION</h1>
                </div>
                <img className="home-page-img" src="/images/Diablo_II_Coverart.png" alt="knight" />

            </div>

                <h1 className="top-games-title">Top Games:</h1>
            <div className="top-games-list">
                <HomeGameCard />
                <HomeGameCard />
                <HomeGameCard />
            </div>
        </>



    )
};

export default Home;