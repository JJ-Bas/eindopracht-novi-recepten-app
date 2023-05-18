import React, {useContext, useEffect, useState} from "react";
import RecipeResultDisplay from "../../components/RecipeResultDisplay/RecipeResultDisplay";
import axios from "axios";
import {QuestionContext} from "../../Context/QuestionContext/QuestionContext";
import './RecipeQuestResult.scss'

function RecipeQuestResult() {

    const [status, setStatus] = useState('pending')
    const {optionList} = useContext(QuestionContext)
    const [mainRecipeList, setMainRecipeList] = useState({})
    const [starterRecipeList, setStarterRecipeList] = useState({})
    const [mainIndex, setMainIndex] = useState(0)
    const [starterIndex, setStarterIndex] = useState(0)
    const [dessertIndex, setDessertIndex] = useState(0)

    //useEffect vuurt get request af naar de edamamAPI gebaseerd op de status van de items die uit de QuestionContext worden gehaald
    useEffect(() => {
        async function fetchData(mealType, setlist) {
            try {
                const result = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&beta=true&app_id=${process.env.REACT_APP_API_ID}&app_key= ${process.env.REACT_APP_API_KEY}${mealType}`);
                setlist(result.data);
                setStatus('done')
            } catch (e) {
                console.error(e)
            }

        }

        fetchData('&mealType=Dinner', setMainRecipeList)
    }, [])


    // twee functies om door de resultaten te navigeren. Werken onafhankelijk van het aantal hits

    function nextItem(state, setState) {
        if (state === (mainRecipeList.hits.length - 1)) {
            setState(0)
        } else {
            setState(state + 1)
            console.log(state)
            console.log(mainRecipeList)
        }
    }

    function lastItem(state, setState) {
        if (state === 0) {
            setState(mainRecipeList.hits.length - 1)
        } else {
            setState(state - 1)
            console.log(state)
        }
    }


    return (
        <>
            <button type='button' onClick={() => console.log(mainRecipeList)}>recipeList</button>
            {status === 'done' ?
                <div className='temporary-container'>
                    <RecipeResultDisplay
                        next={() => nextItem(starterIndex, setStarterIndex)}
                        image={mainRecipeList.hits[starterIndex].recipe.image}
                        recipeName={mainRecipeList.hits[starterIndex].recipe.label}
                        time={mainRecipeList.hits[starterIndex].recipe.totalTime}
                        ingredients={mainRecipeList.hits[starterIndex].recipe.ingredients.length}
                        back={() => lastItem(starterIndex, setStarterIndex)}
                    />
                    <RecipeResultDisplay
                        next={() => nextItem(mainIndex, setMainIndex)}
                        image={mainRecipeList.hits[mainIndex].recipe.image}
                        recipeName={mainRecipeList.hits[mainIndex].recipe.label}
                        time={mainRecipeList.hits[mainIndex].recipe.totalTime}
                        ingredients={mainRecipeList.hits[mainIndex].recipe.ingredients.length}
                        back={() => lastItem(mainIndex, setMainIndex)}
                    />
                    <RecipeResultDisplay
                        next={() => nextItem(dessertIndex, setDessertIndex)}
                        image={mainRecipeList.hits[dessertIndex].recipe.image}
                        recipeName={mainRecipeList.hits[dessertIndex].recipe.label}
                        time={mainRecipeList.hits[dessertIndex].recipe.totalTime}
                        ingredients={mainRecipeList.hits[dessertIndex].recipe.ingredients.length}
                        back={() => lastItem(dessertIndex, setDessertIndex)}
                    />
                </div> :
                <p>Loading...</p>}


        </>
    )
}

export default RecipeQuestResult