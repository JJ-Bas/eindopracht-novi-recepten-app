import React from "react";
import  styles from './TerraceCard.module.scss'

function TerraceCard({image,title,onClick}) {
    return (
            <article className={styles['terrace-card']} onClick={onClick}>
                <span className={styles['terrace-image-span']}><img className={styles['terrace-image']}src={image} alt={title}/></span>
                <h2>{title}</h2>
            </article>
    )
}

export default TerraceCard