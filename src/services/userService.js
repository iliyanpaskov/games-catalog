const baseUrl = "https://softuni-oldgames-custom.herokuapp.com";

export async function login (email,password) {
    

    const res = await fetch (`${baseUrl}/users/login`,settings);

}