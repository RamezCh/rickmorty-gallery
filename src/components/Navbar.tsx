import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li>
                    <NavLink to="/" className="navbar-link">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/characters" className="navbar-link">
                        Characters
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}