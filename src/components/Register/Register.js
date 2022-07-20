import "./Register.css"

const Register = () => {
    
    const submitRegister = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={submitRegister} className="register-form">
            <div className="register-wrapper">
                <h1>Register</h1>
                <label className="label" htmlFor="email">Email:</label>
                <input className="register-input" type="email" id="email" placeholder="Enter your email here"></input>
                <label className="label" htmlFor="password">Password:</label>
                <input className="register-input" type="password" id="password" placeholder="Enter your password here"></input>
                <label className="label" htmlFor="password">Password:</label>
                <input className="register-input" type="password" id="password" placeholder="Confirm password here"></input>
                <button type="submit" className="register-button">Register</button>
            </div>
        </form>
    )

}

export default Register;