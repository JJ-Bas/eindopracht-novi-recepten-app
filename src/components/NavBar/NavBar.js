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
                    disabled={!isAuth}
                >profile</NavLink></li>
                <li><NavLink
                    className="nav-link"
                    to="/questionnaire"
                    disabled={!isAuth}
                >recipe finder</NavLink></li>
                <li><NavLink
                    className="nav-link"
                    to="/search-recipes"
                    disabled={!isAuth}
                >search page</NavLink></li>
                <li className={styles["logout-li"]}>
                    {isAuth ? <button type="button" className={styles["logout-button"]} onClick={() => logout()}>logout</button> : ""}
                </li>
            </ul>
        </nav>)
}

export default NavBar