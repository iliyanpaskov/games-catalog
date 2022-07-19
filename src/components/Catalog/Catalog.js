import "./Catalog.css"

const Catalog = () => {
    return (
        <div className="catalog-view">
            <h1 className="catalog-title">The best old games are:</h1>
            <ul>
                <div className="card mb-3" id="catalog-card">
                    <img src="http://i.imgur.com/nfx15kC.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                </div>
                <div className="card mb-3" id="catalog-card">
                    <img src="https://cdn2.unrealengine.com/heroes-iii-complete-epic-edition-capsule-hero-carrousel-1920x1080-1920x1080-8dbed88694f1.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                </div>
                <div className="card mb-3" id="catalog-card">
                    <img src="https://upload.wikimedia.org/wikipedia/en/5/56/Age_of_Empires_II_-_The_Age_of_Kings_Coverart.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                </div>
        
            </ul>
        </div>
    )
}

export default Catalog;