import { useState } from "react";
import { createContext } from "react";
const baseUrl = "https://softuni-oldgames-custom.herokuapp.com";


export const AuthContext = createContext();

export const AuthState = ({
    children
}) => {

    const [user, setUser] = useState({
        _id: null,
        accsessToken: null,
        email: null,
    });

    const loginData = (authData) => {
        setUser(authData);
    }

    const logoutData = async () => {
        try {
            const res = await fetch(`${baseUrl}/users/logout`, {
                headers: { "X-Authorization": user?.accessToken }
            })
            if (res.ok) {
                setUser({
                    _id: null,
                    accessToken: null,
                    email: null,
                })
            } else {
                throw res.message
            }
        } catch (err) {
            alert(err.message)
        }
    }





    return (
        <AuthContext.Provider value={{ user, loginData, logoutData ,isAuthenticated:Boolean(user.accessToken) }}>
            {children}
        </AuthContext.Provider>
    )
}

