import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./PageNotFound.module.scss"

function PageNotFound() {

    return (
        <div className={"outer-container"}>
            <div className={"inner-container " + styles["page-not-found-container"]}>
                <h2>sorry, we could not find this page</h2>
                <NavLink
                    to="/"
                >take me home</NavLink>
            </div>
        </div>
    )

}

export default PageNotFound