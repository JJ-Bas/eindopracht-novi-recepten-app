import React from "react";
import  styles from './TerraceCard.module.scss'

function TerraceCard({image,title,onClick}) {
    return (
            <button type='button' className={styles['terrace-card']} onClick={onClick}>
                <img src={image} alt={title}/>
                <h2>{title}</h2>
            </button>
    )
}

export default TerraceCard