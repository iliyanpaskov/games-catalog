import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { successNotification } from "../../services/notificationService";
import "./Header.css"


const Header = () => {
    const { user, logoutData } = useContext(AuthContext);
    const userLogout = () => {
        successNotification('Logout was successful !');
        logoutData();
    }

    const welcomeMessage = () => {
        return (
            <p className="welcome-message">Welcome, {user.email} </p>
        )
    }

    const guestMessage = () => {
        return (
            <p className="welcome-message">Welcome to our games catalog! Pleace Login! </p>
        )
    }

    const userNav = () => {
        return (
            <>
                <li className="nav-item">
                    <Link className="nav-link" to="/my-games">My Games</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/create">Add New Game</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/" onClick={userLogout} >LogOut</Link>
                </li>
            </>
        )
    }

    const guestNav = () => {
        return (<>
            <li className="nav-item">
                <Link className="nav-link" to="/login">LogIn</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
            </li>
        </>
        )
    }

    return (
        <nav className="main-navigation">
            {user?.email
                ? welcomeMessage()
                : guestMessage()}
            <ul className="nav-list-wrapper">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Best Old Games</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/our-mission">Our Mission</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/catalog">Catalog</Link>
                </li>
                {user?._id
                    ? userNav()
                    : guestNav()
                }
            </ul>
        </nav>
    )
}

export default Header;