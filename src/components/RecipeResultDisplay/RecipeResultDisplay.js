import React from "react";

function RecipeResultDisplay({recipeName, image, time, ingredients}) {
    return(
        <>
            <p> result </p>
            <div className='outer-display-case'>
                <button type='button'>next</button>
                <img url={image}/>
                <article>
                    <h2>{recipeName}</h2>
                    <ul>
                        <li>tijd: {time} minuten</li>
                        <li>aantal ingredienten {ingredients}</li>
                    </ul>
                </article>
                <button type='button'>back</button>
            </div>
        </>
    )
}

export default RecipeResultDisplay