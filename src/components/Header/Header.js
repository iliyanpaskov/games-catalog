import { Link } from "react-router-dom";
import { useContext } from "react";
import "./Header.css"
import { AuthContext } from "../../context/AuthContext";


const Header = () => {
    const { user, logoutData } = useContext(AuthContext);
    const userLogout =  () => {
       logoutData()
    }


    return (
        <nav className="main-navigation">
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
                <li className="nav-item">
                    <Link className="nav-link" to="/login">LogIn</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/my-games">My Games</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/create">Add New Game</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/" onClick={userLogout} >LogOut</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header;