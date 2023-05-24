import React, {useContext, useEffect, useState} from "react";
import RecipeResultDisplay from "../../components/RecipeResultDisplay/RecipeResultDisplay";
import axios from "axios";
import {QuestionContext} from "../../Context/QuestionContext/QuestionContext";
import './RecipeQuestResult.scss'

function RecipeQuestResult() {

    const {optionList} = useContext(QuestionContext)
    const {cuisineType} = useContext(QuestionContext)

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

    async function fetchData(mealTypeString, cuisineTypeString, setlist, setLoadingStatus) {
        try {
            const result = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&beta=true&app_id=${process.env.REACT_APP_API_ID}&app_key= ${process.env.REACT_APP_API_KEY}${mealTypeString}${cuisineTypeString}`);
            setlist(result.data);
            setLoadingStatus('done')
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        fetchData('&dishType=main-course', cuisineType, setMainRecipeList, setMainReqStatus)
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

    //TODO -opmaak van de starter en dessert request knop

    return (
        <>
            <button type='button' onClick={() => console.log(mainRecipeList)}>recipeList</button>
            <div className='temporary-container'>
                {starterReqStatus === 'done' ? <RecipeResultDisplay
                    next={() => nextItem(starterIndex, setStarterIndex)}
                    image={starterRecipeList.hits[starterIndex].recipe.image}
                    recipeName={starterRecipeList.hits[starterIndex].recipe.label}
                    time={starterRecipeList.hits[starterIndex].recipe.totalTime}
                    ingredients={starterRecipeList.hits[starterIndex].recipe.ingredients.length}
                    back={() => lastItem(starterIndex, setStarterIndex)}
                /> : <button type="button" onClick={() => fetchData('&dishType=starter', cuisineType, setStarterRecipeList, setStarterReqStatus)}>starter</button>}

                {mainReqStatus === 'done' ? <RecipeResultDisplay
                    next={() => nextItem(mainIndex, setMainIndex)}
                    image={mainRecipeList.hits[mainIndex].recipe.image}
                    recipeName={mainRecipeList.hits[mainIndex].recipe.label}
                    time={mainRecipeList.hits[mainIndex].recipe.totalTime}
                    ingredients={mainRecipeList.hits[mainIndex].recipe.ingredients.length}
                    back={() => lastItem(mainIndex, setMainIndex)}
                /> : <p>Loading...</p>}

                {dessertReqStatus === 'done' ? <RecipeResultDisplay
                    next={() => nextItem(dessertIndex, setDessertIndex)}
                    image={dessertRecipeList.hits[dessertIndex].recipe.image}
                    recipeName={dessertRecipeList.hits[dessertIndex].recipe.label}
                    time={dessertRecipeList.hits[dessertIndex].recipe.totalTime}
                    ingredients={dessertRecipeList.hits[dessertIndex].recipe.ingredients.length}
                    back={() => lastItem(dessertIndex, setDessertIndex)}
                /> : <button type="button" onClick={() => fetchData('&dishType=desserts', cuisineType, setDessertRecipeList, setDessertReqStatus)}>dessert</button>}
            </div>
    </>)
}

export default RecipeQuestResult