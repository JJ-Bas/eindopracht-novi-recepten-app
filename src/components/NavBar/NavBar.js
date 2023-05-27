import React from "react";
import {useNavigate} from 'react-router-dom';
import {NavLink} from "react-router-dom";
import styles from './NavBar.module.scss'

function NavBar() {
    const navigate = useNavigate();

    return (
        <nav className="navigation-bar">
        <ul>
            <li><NavLink className="nav-link"
                         to="/"
                         style={{ textDecoration: 'none', color: 'white'}}
            >home</NavLink></li>
            <li><NavLink className="nav-link"
                         to="/profile"
                         style={{ textDecoration: 'none', color: 'white'}}
            >profile</NavLink></li>
            <li><NavLink className="nav-link"
                         to="/questionnaire"
                         style={{ textDecoration: 'none', color: 'white'}}
            >questionnaire</NavLink></li>
            <li><NavLink className="nav-link"
                         to="/signin"
                         style={{ textDecoration: 'none', color: 'white'}}

            >sign-in</NavLink></li>
            <li><NavLink className="nav-link"
                         to="/signup"
                         style={{ textDecoration: 'none', color: 'white'}}

            >sign-up</NavLink></li>
            <li><NavLink className="nav-link"
                         to="/quest-results"
                         style={{ textDecoration: 'none', color: 'white'}}

            >quest-result</NavLink></li>
        </ul>
        </nav>)
}

export default NavBar