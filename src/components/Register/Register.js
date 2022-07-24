import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import * as authService from "../../services/authServices.js"
import "./Register.css"

const Register = () => {
    const { registerData } = useContext(AuthContext);

    let historyHook = useHistory();

    const submitRegister = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");
        const repPassword = formData.get("re-password");

        if (email !== "" && password === repPassword) {
            authService.register(email,password)
                .then((authData) => {
                    registerData(authData);
                    historyHook.push("/");
                }).catch(err => {
                    alert(err?.message)
                })
        } else {
            if (email === "") {
                alert("You need to enter your email address !")
            } else {
                alert("Incorrect password !")
            }
        }

    }

    return (
        <form onSubmit={submitRegister} className="register-form">
            <div className="register-wrapper">
                <h1>Register</h1>
                <label className="label" htmlFor="email">Email:</label>
                <input className="register-input" type="email" name="email" placeholder="Enter your email here"></input>
                <label className="label" htmlFor="password">Password:</label>
                <input className="register-input" type="password" name="password" placeholder="Enter your password here"></input>
                <label className="label" htmlFor="password">Confirm Password:</label>
                <input className="register-input" type="password" name="re-password" placeholder="Confirm password here"></input>
                <button type="submit" className="register-button">Register</button>
                <p>If you have an account click  :<Link className="nav-link" to="/login">HERE</Link></p>
            </div>
        </form>
    )

}

export default Register;