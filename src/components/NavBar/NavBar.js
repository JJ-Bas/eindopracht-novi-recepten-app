import React, {useContext} from "react";
import {NavLink} from "react-router-dom";
import styles from './NavBar.module.scss'
import {AuthContext} from "../../Context/AuthContext/AuthContext";

function NavBar() {

    const {isAuth} = useContext(AuthContext)
    const {logout} = useContext(AuthContext)

    return (
        <nav className="navigation-bar">
            <ul>
                <li><NavLink
                    to="/"
                >home</NavLink></li>
                <li><NavLink
                    className="nav-link"
                    to="/signin"
                >login</NavLink></li>
                <li><NavLink
                    className="nav-link"
                    to="/profile"
                >profile</NavLink></li>
                <li><NavLink
                    className="nav-link"
                    to="/questionnaire"
                >recipe finder</NavLink></li>
                <li><NavLink
                    className="nav-link"
                    to="/search-recipes"
                >search page</NavLink></li>
                <li className={styles["logout-li"]}>
                    {isAuth ? <button type="button" className={styles["logout-button"]} onClick={() => logout()}>logout</button> : ""}
                </li>
            </ul>
        </nav>)
}

export default NavBar