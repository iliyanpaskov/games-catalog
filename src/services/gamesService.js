const baseUrl = "https://softuni-oldgames-custom.herokuapp.com";

export async function getAllGames() {
    const res = await fetch(`${baseUrl}/data/games?sortBy=_createdOn%20desc`);
    const result = await res.json();
    return result;
}