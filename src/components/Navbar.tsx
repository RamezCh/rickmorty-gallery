import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-list">
                <NavLink to="/" className="navbar-link">
                    Home
                </NavLink>
                <NavLink to="/characters" className="navbar-link">
                    Characters
                </NavLink>
                <NavLink to="/add/character" className="navbar-link">
                    Add Character
                </NavLink>
            </div>
        </nav>
    );
}