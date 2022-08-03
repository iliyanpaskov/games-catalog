import MyGamesCard from "./MyGamesCard/MyGamesCard";
import { isAuthenticated } from "../../hoc/isAuthenticated";
import "./MyGames.css"
import useFetch from "../../hooks/useFetch";

const MyGames = ({
    user
}) => {
    const myGames = useFetch();

    return (
        <div className="my-games-wapper">
            <div className="my-games-title-wapper">
                <h1 className="my-games-title">{user.email} games:</h1>
            </div>

            <div className="my-games-list-wrapper">
                {myGames.filter(game => game._ownerId === user._id).map(x => <MyGamesCard key={x._id} game={x}/>)}
            </div>
        </div>
    )
}

export default isAuthenticated(MyGames);