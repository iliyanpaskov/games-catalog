import "./Home.css"
import HomeGameCard from "./HomeGameCard/HomeGameCard";

const Home = () => {

    return (

        <section>
            <div className="home-page">
                <h1 className="home-message">BEST OLD GAMES</h1>
                <h1 className="home-message"> COLLECTION</h1>
            </div>
            <img id="knight" src="/images/Diablo_II_Coverart.png" alt="knight" />

            <h1 className="top-games">Top Games:</h1>

            <div>

                <HomeGameCard />
                <HomeGameCard />
                <HomeGameCard />

            </div>

        </section>


    )
};

export default Home;