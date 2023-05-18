import React from "react";
import  styles from './TerraceCard.module.scss'

function TerraceCard({image,alt,title,onClick}) {
    return (
            <button type='button' className={styles['terrace-card']} onClick={onClick}>
                <img src={image} alt={alt}/>
                <h2>{title}</h2>
            </button>
    )
}

export default TerraceCard