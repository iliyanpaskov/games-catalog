const baseUrl = "https://softuni-oldgames-custom.herokuapp.com";

export async function getAllGames() {
    try {
        const res = await fetch(`${baseUrl}/data/games?sortBy=_createdOn%20desc`);
        const result = await res.json();
        if (res.ok) {
            return result;
        } else {
            throw result.message;
        }
    } catch (err) {
        throw err;
    }
}

export async function getOneGame(gameId) {
    try {
        const res = await fetch(`${baseUrl}/data/games/${gameId}`);
        const result = await res.json();
        if (res.ok) {
            return result;
        } else {
            throw result.message;
        }
    } catch (err) {
        throw err;
    }
}

export async function changeGame(gameId, token, title, category, maxLevel, imageUrl, summary) {
    const settings = {
        method: "PUT",
        headers: { "X-Authorization": (`${token}`) },
        body: JSON.stringify({ title, category, maxLevel, imageUrl, summary })
    }
    try {
        const res = await fetch(`${baseUrl}/data/games/${gameId}`, settings);
        const result = await res.json()
        if (res.ok) {
            return result;
        } else {
            throw result.message;
        }
    } catch (error) {
        throw error;
    }
}