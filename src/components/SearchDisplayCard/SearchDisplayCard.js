import React from "react";
import styles from "./SearchDisplayCard.module.scss"




function SearchDisplayCard({image,label,link}) {
    return (
        <li>
            <article className={styles["search-card"]} key={label} onClick={() => window.open(link, "_blank")}>
                <span className={styles["search-image-span"]}><img src={image} alt={label}/></span>
                <h2>{label}</h2>
            </article>
        </li>
    )
}

export default SearchDisplayCard