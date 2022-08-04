import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.js";
import * as authService from "../../services/authServices.js";
import { Link } from "react-router-dom";
import { toast, Zoom } from 'react-toastify';
import "./Login.css"
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { loginData } = useContext(AuthContext);

    let historyHook = useHistory();

    const submitLogin = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let email = formData.get("email");
        let password = formData.get("password");

        authService.login(email, password)
            .then((authData) => {

                toast.success(`Wellcome ${email}!`, {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    transition: Zoom,
                    theme: "dark"
                });

                loginData(authData);
                historyHook.push("/");
            }).catch(err => {
                toast.error(err, {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    transition: Zoom,
                    theme: "dark"
                });
                historyHook.push("/login");
            });

    }

    return (
        <form onSubmit={submitLogin} className="login-form">
            <div className="login-wrapper">
                <h1>Login</h1>
                <label className="label" htmlFor="email">Email:</label>
                <input className="login-input" type="email" name="email" placeholder="Enter your email here"></input>
                <label className="label" htmlFor="password">Password:</label>
                <input className="login-input" type="password" name="password" placeholder="Enter your password here"></input>


                <button type="submit" className="login-button">Login</button>
                <p>If you don't have an account click  :<Link className="nav-link" to="/register">HERE</Link></p>
            </div>

        </form>
    )
}

export default Login;