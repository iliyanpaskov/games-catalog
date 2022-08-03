import CatalogGameCard from "./CatalogGameCard/CatalogGameCard.js";
import useFetch from "../../hooks/useFetch.js";
import "./Catalog.css"


const Catalog = () => {

    const catalogGames = useFetch()

    return (
        <div className="catalog">
            <h1 className="catalog-title">The best old games are:</h1>
            <ul className="catalog-list-wrapper">
                {catalogGames.map(x => <CatalogGameCard key={x._id} game = {x}/>)}
            </ul>
        </div>
    )
}

export default Catalog;