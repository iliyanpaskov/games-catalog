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

export async function getGameComments(token, gameId) {
    const settings = {
        headers: {
            "X-Authorization": (`${token}`)
        }
    }
    try {
        const res = await fetch(`${baseUrl}/data/comments?where=gameId%3D%22${gameId}%22`,settings);
        const result = await res.json();

        if(res.ok){
            return result;
        }else{
            throw result.message;
        }

    } catch (error) {
        //TODO
    }
}