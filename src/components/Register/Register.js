import { Link, useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import * as authService from "../../services/authServices.js"
import { errorNotification, successNotification } from "../../services/notificationService";
import "./Register.css"

const Register = () => {
    const { loginData } = useContext(AuthContext);
    const [styleState, setStyleState] = useState(false);

    let historyHook = useHistory();

    const submitRegister = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");
        const repPassword = formData.get("re-password");

        if (email !== "" && styleState && password === repPassword) {
            authService.register(email, password)
                .then((authData) => {
                    successNotification('Registration successful !  Wellcome !')
                    loginData(authData);
                    historyHook.push("/");
                }).catch(err => {
                    errorNotification(err)
                });
        } else {
            if (email === "") {
                errorNotification("Enter you email !");
            } else {
                errorNotification("Incorrect password !");
            }
        }
    }

    const checkPassHandler = (e) => {
        let pass = e.currentTarget.value;
        if (pass.length >= 4 && pass.length <= 12) {
            setStyleState(true);
        } else {
            setStyleState(false)
        }
    }

    return (
        <form onSubmit={submitRegister} className="register-form">
            <div className="register-wrapper">
                <h1>Register</h1>
                <label className="label" htmlFor="email">Email:</label>
                <input className="register-input" type="email" name="email" placeholder="Enter your email here"></input>
                <label className="label" htmlFor="password">Password:</label>
                <input className="register-input" type="password" name="password" placeholder="Enter your password here" onChange={checkPassHandler} ></input>
                <span className="input-check" style={{ display: styleState ? "none" : "inline" }} >Password must be between 4 - 12 characters long !</span>
                <label className="label" htmlFor="password">Confirm Password:</label>
                <input className="register-input" type="password" name="re-password" placeholder="Confirm password here"></input>
                <button type="submit" className="register-button">Register</button>
                <p>If you have an account click  :<Link className="nav-link" to="/login">HERE</Link></p>
            </div>
        </form>
    );
}

export default Register;