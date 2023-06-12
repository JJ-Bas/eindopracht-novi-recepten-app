import React, {useContext, useEffect, useState} from "react";
import RecipeResultDisplay from "../../components/RecipeResultDisplay/RecipeResultDisplay";
import axios from "axios";
import {QuestionContext} from "../../Context/QuestionContext/QuestionContext";
import './RecipeQuestResult.scss'

function RecipeQuestResult() {

    const {cuisineType} = useContext(QuestionContext)
    const {checkboxCombined} = useContext(QuestionContext)
    const {recipeTime} = useContext(QuestionContext)

    // state items voor het laden van de pagina
    const [starterReqStatus, setStarterReqStatus] = useState('pending')
    const [mainReqStatus, setMainReqStatus] = useState('pending')
    const [dessertReqStatus, setDessertReqStatus] = useState('pending')
    // state items met zoekresultaten
    const [starterRecipeList, setStarterRecipeList] = useState({})
    const [mainRecipeList, setMainRecipeList] = useState({})
    const [dessertRecipeList, setDessertRecipeList] = useState({})
    //index nummers voor de navigatie knoppen
    const [starterIndex, setStarterIndex] = useState(0)
    const [mainIndex, setMainIndex] = useState(0)
    const [dessertIndex, setDessertIndex] = useState(0)

    //useEffect vuurt get request af naar de edamamAPI gebaseerd op de status van de items die uit de QuestionContext worden gehaald
    //TODO - zorg dat de API request worden beinvloed door de opties van de CheckboxDisplay
    //     - zorg ervoor dat de API random recepten terug geeft

    async function fetchData(mealTypeString, cuisineTypeString, setlist, healthOptionString, setLoadingStatus) {
        try {
            const result = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&beta=true&app_id=${process.env.REACT_APP_API_ID}&app_key= ${process.env.REACT_APP_API_KEY}&random=true${recipeTime}${mealTypeString}${cuisineTypeString}${healthOptionString}`);
            setlist(result.data.hits);
            setLoadingStatus('done')
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        fetchData('&dishType=main-course', cuisineType, setMainRecipeList, checkboxCombined, setMainReqStatus)
    }, [])

    // twee functies om door de resultaten te navigeren. Werken onafhankelijk van het aantal hits

    function nextItem(state, setState) {
        if (state === (mainRecipeList.length - 1)) {
            setState(0)
        } else {
            setState(state + 1)
        }
    }

    function lastItem(state, setState) {
        if (state === 0) {
            setState(mainRecipeList.length - 1)
        } else {
            setState(state - 1)
        }
    }

    //TODO -opmaak van de starter en dessert request knop

    return (
        <>
            <div className='temporary-container'>
                {starterReqStatus === 'done' ? <RecipeResultDisplay
                    next={() => nextItem(starterIndex, setStarterIndex)}
                    image={starterRecipeList[starterIndex].recipe.image}
                    recipeName={starterRecipeList[starterIndex].recipe.label}
                    time={starterRecipeList[starterIndex].recipe.totalTime}
                    ingredientsNumber={starterRecipeList[starterIndex].recipe.ingredients.length}
                    ingredientsList={starterRecipeList[starterIndex].recipe.ingredientLines}
                    link={starterRecipeList[starterIndex].recipe.url}
                    back={() => lastItem(starterIndex, setStarterIndex)}
                /> : <button type="button" onClick={() => fetchData('&dishType=starter', cuisineType, setStarterRecipeList, checkboxCombined, setStarterReqStatus)}>starter</button>}

                {mainReqStatus === 'done' ? <RecipeResultDisplay
                    next={() => nextItem(mainIndex, setMainIndex)}
                    image={mainRecipeList[mainIndex].recipe.image}
                    recipeName={mainRecipeList[mainIndex].recipe.label}
                    time={mainRecipeList[mainIndex].recipe.totalTime}
                    ingredientsNumber={mainRecipeList[mainIndex].recipe.ingredients.length}
                    ingredientsList={mainRecipeList[mainIndex].recipe.ingredientLines}
                    link={mainRecipeList[mainIndex].recipe.url}
                    back={() => lastItem(mainIndex, setMainIndex)}
                /> : <p>Loading...</p>}

                {dessertReqStatus === 'done' ? <RecipeResultDisplay
                    next={() => nextItem(dessertIndex, setDessertIndex)}
                    image={dessertRecipeList[dessertIndex].recipe.image}
                    recipeName={dessertRecipeList[dessertIndex].recipe.label}
                    time={dessertRecipeList[dessertIndex].recipe.totalTime}
                    ingredientsNumber={dessertRecipeList[dessertIndex].recipe.ingredients.length}
                    ingredientsList={dessertRecipeList[dessertIndex].recipe.ingredientLines}
                    link={dessertRecipeList[dessertIndex].recipe.url}
                    back={() => lastItem(dessertIndex, setDessertIndex)}
                /> : <button type="button" onClick={() => fetchData('&dishType=desserts', cuisineType, setDessertRecipeList, checkboxCombined, setDessertReqStatus)}>dessert</button>}
            </div>
            <button type="button" onClick={() => console.log(mainRecipeList)}>log result</button>
    </>)
}

export default RecipeQuestResult