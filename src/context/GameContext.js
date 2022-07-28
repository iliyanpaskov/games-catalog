import { createContext, useState } from "react";

export const GameContext = createContext()

export const GameState = ({children}) => {
    const [currentGame, setCurrentGame] = useState({
        "_ownerId": null,
        "title": null,
        "category": null,
        "maxLevel": null,
        "imageUrl": null,
        "summary": null,
        "_id": null
    });

    const currentGameData = (data) => {
        setCurrentGame(data)
        console.log(currentGame);
    }

    return (
        <GameContext.Provider value={{currentGame, currentGameData}}>
            {children}
        </GameContext.Provider>
    )

}