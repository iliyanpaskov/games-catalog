import { useEffect, useState } from "react";
import * as gameServices from "../../services/gamesService.js"
import CatalogGameCard from "./CatalogGameCard/CatalogGameCard.js";
import "./Catalog.css"


const Catalog = () => {

    const [gamesState, setGamesState] = useState([]);

    useEffect(() => {
        const allCatalogGames = async () => {
            let result = await gameServices.getAllGames()
            setGamesState(Object.values(result))
        }
        allCatalogGames();
    },[])

    return (
        <div className="catalog">
            <h1 className="catalog-title">The best old games are:</h1>
            <ul className="catalog-list-wrapper">
                {gamesState.map(x => <CatalogGameCard key={x._id} game = {x}/>)}
            </ul>
        </div>
    )
}

export default Catalog;