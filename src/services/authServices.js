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
            console.log(res);
            return data;
        } else {
            throw data.message;
        }
    } catch {
        alert("Wrong email or password !")
    }
}

export const register = async (email, password) => {
    const settings = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    }

    try {
        const res = await fetch(`${baseUrl}/users/register`, settings);
        const data = await res.json();
        if (res.ok) {
            return data;
        } else if (res.status == 409) {
            alert("This email is allready registered")
        } else {
            throw data.message;
        }
    } catch {
        alert("All fields must be fill!")
    }
}



