import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {

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
                    <Link className="nav-link" to="/my-games">MyGames</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/logout" >LogOut</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Header;