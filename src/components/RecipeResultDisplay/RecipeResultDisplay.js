import React, {useState} from "react";
import styles from './RecipeResultDisplay.module.scss'
import infoIcon from '../../assets/images/info-icon.png'
import listIcon from '../../assets/images/list-47.png'


function RecipeResultDisplay({recipeName, image, time, ingredientsNumber, ingredientsList, link, back, next}) {

    const [recipeInfoContainer, toggleRecipeInfoContainer] = useState(false)

    function infoToggle(setting) {
        toggleRecipeInfoContainer(setting)
    }

    return (
        <>
            <div className={styles['outer-display-case']}>
                <button className={styles['index-button'] + ' ' + styles['top-button']} type='button'
                        onClick={next}>next
                </button>
                <article className={styles['recipe-info-case']}>
                    <img src={image} alt={recipeName} className={styles['recipe-img']}/>
                    <div className={styles['recipe-info-container']}>
                        <button type="button"
                                className={styles["info-toggle-b"] + " " + styles["i-button-top"]}
                                onClick={() => infoToggle(false)}>
                            <img className={styles['icon']} src={infoIcon} />
                        </button>
                        <button type="button"
                                className={styles["info-toggle-b"] + " " + styles["i-button-bottom"]}
                                onClick={() => infoToggle(true)}>
                            <img className={styles['icon']} src={listIcon} />
                        </button>
                        <h2>{recipeName}</h2>
                        {recipeInfoContainer === false ?
                            <ul>
                                <li>tijd: {time} minuten</li>
                                <li>aantal ingredienten {ingredientsNumber}</li>
                            </ul> :
                            <ul>
                                {ingredientsList.map((i) => (
                                    <li key={i}>{[i]}</li>))}
                            </ul>}
                        <button type="button" onClick={() => window.open(link, "_blank")}>instructies</button>
                    </div>
                </article>
                <button className={styles['index-button']} type='button' onClick={back}>back</button>
            </div>
        </>
    )
}

export default RecipeResultDisplay