import React from "react";
import styles from './RecipeResultDisplay.module.scss'


function RecipeResultDisplay({recipeName, image, time, ingredients, back, next}) {


    //TODO: -add alt to image

    return (
        <>
            <div className={styles['outer-display-case']}>
                <button className={styles['index-button']} type='button' onClick={next}>next</button>
                <article>
                    <img src={image} alt={recipeName}/>
                    <div className={styles['recipe-info-container']}>
                    <h2>{recipeName}</h2>
                    <ul>
                        <li>tijd: {time} minuten</li>
                        <li>aantal ingredienten {ingredients}</li>
                    </ul>
                    </div>
                </article>
                <button className={styles['index-button']} type='button' onClick={back}>back</button>
            </div>
        </>
    )
}

export default RecipeResultDisplay