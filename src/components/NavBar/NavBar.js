import React from "react";
import {NavLink} from "react-router-dom";
import styles from './NavBar.module.scss'

function NavBar() {

    return (
        <nav className="navigation-bar">
            <ul>
                <li><NavLink
                    to="/"
                >home</NavLink></li>
                <li><NavLink
                    className="nav-link"
                    to="/profile"
                >profile</NavLink></li>
                <li><NavLink
                    className="nav-link"
                    to="/questionnaire"
                >questionnaire</NavLink></li>
                <li><NavLink
                    className="nav-link"
                    to="/signin"
                >sign-in</NavLink></li>
                <li><NavLink
                    className="nav-link"
                    to="/signup"
                >sign-up</NavLink></li>
                <li><NavLink
                    className="nav-link"
                    to="/quest-results"
                >quest-result</NavLink></li>
            </ul>
        </nav>)
}

export default NavBar