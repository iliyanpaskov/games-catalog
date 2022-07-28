const baseUrl = "https://softuni-oldgames-custom.herokuapp.com";

export async function createGame(token, title, category, maxLevel, imageUrl, summary) {

    const settings = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": (`${token}`)
        },
        body: JSON.stringify({ title, category, maxLevel, imageUrl, summary })
    }
    try {
        const res = await fetch(`${baseUrl}/data/games`, settings);
        const data = await res.json();

        if (res.ok) {
            return data;
        } else {
            throw data.message;
        }
    } catch {
        // TODO Catch
    }
}



export async function deleteGame(token, gameId) {
    try {  
        const res = await fetch(`${baseUrl}/data/games/${gameId}`, {
            method: "DELETE",
            headers: {
                "X-Authorization": (`${token}`)
            }
        })
        const data = await res.json();
        if (res.ok) {
            return data;
        } else {
            throw data.message;
        }
    } catch (error) {
        //TODO..
    }
}