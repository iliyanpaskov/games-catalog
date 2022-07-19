import "./Login.css"

const Login = () => {
    const submitLogin =(e) =>{
        e.preventDefault();
    }
    
    return (
        <form onSubmit={submitLogin} className="login-form">
            <div className="login-wrapper">
                <h1>Login</h1>
                <label className="label" htmlFor="email">Email:</label>
                <input className="login-input" type="email" id="email" placeholder="Enter your email here"></input>
                <label className="label" htmlFor="password">Password:</label>
                <input className="login-input" type="password" id="password" placeholder="Enter your password here"></input>


                <button type="submit" className="login-button">Login</button>
            </div>

        </form>
    )
}

export default Login;