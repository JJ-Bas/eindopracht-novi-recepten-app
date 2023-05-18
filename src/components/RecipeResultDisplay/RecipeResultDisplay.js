import React from "react";
import styles from './RecipeResultDisplay.module.scss'


function RecipeResultDisplay({recipeName, image, time, ingredients, back, next}) {


    //TODO: -add alt to image

    return(
        <>
                        <div className={styles['outer-display-case']}>
                <button type='button' onClick={next}>next</button>
                <article>
                    <h2>{recipeName}</h2>

                    <img src={image}/>

                    <ul>
                        <li>tijd: {time} minuten</li>
                        <li>aantal ingredienten {ingredients}</li>
                    </ul>
                </article>
                <button type='button' onClick={back}>back</button>
            </div>
        </>
    )
}

export default RecipeResultDisplay