const baseUrl = "https://softuni-oldgames-custom.herokuapp.com";



export const login = async (email, password) => {

    const settings = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    }

    try {
        const res = await fetch(`${baseUrl}/users/login`, settings);
        const data = await res.json();
        if (res.ok) {
            // console.log(data);
            return data;
        } else {
            throw data.message;
        }
    } catch {
        alert("Wrong email or password !")
    }
}



