import React, {useContext, useEffect, useState} from "react";
import RecipeResultDisplay from "../../components/RecipeResultDisplay/RecipeResultDisplay";
import axios from "axios";
import {QuestionContext} from "../../Context/QuestionContext/QuestionContext";
import './RecipeQuestResult.scss'
import {useNavigate} from "react-router-dom";

function RecipeQuestResult() {

    const navigate = useNavigate()
    const {cuisineType} = useContext(QuestionContext)
    const {checkboxCombined} = useContext(QuestionContext)
    const {recipeTime} = useContext(QuestionContext)

    const [error, setError] = useState(false)
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

    async function fetchData(mealTypeString, cuisineTypeString, setlist, healthOptionString, setLoadingStatus, config) {
        try {
            const result = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&beta=true&app_id=${process.env.REACT_APP_API_ID}&app_key= ${process.env.REACT_APP_API_KEY}&random=true${recipeTime}${mealTypeString}${cuisineTypeString}${healthOptionString}`, config);
            setlist(result.data.hits);
            setLoadingStatus('done')
        } catch (e) {
            console.error(e)
            setError(true)
            setLoadingStatus('done')
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

    return (
        <div className="outer-container">
            <div className='result-container'>
                {starterReqStatus === 'done' ? (starterRecipeList.length > 0 ? (
                    <RecipeResultDisplay
                        next={() => nextItem(starterIndex, setStarterIndex)}
                        image={starterRecipeList[starterIndex].recipe.image}
                        recipeName={starterRecipeList[starterIndex].recipe.label}
                        time={starterRecipeList[starterIndex].recipe.totalTime}
                        ingredientsNumber={starterRecipeList[starterIndex].recipe.ingredients.length}
                        ingredientsList={starterRecipeList[starterIndex].recipe.ingredientLines}
                        link={starterRecipeList[starterIndex].recipe.url}
                        back={() => lastItem(starterIndex, setStarterIndex)}
                    />
                ) : (
                    <button className="get-button">Sorry! No recipes found.</button>
                )) : (
                    <button type="button" className="get-button"
                            onClick={() => fetchData('&dishType=starter', cuisineType, setStarterRecipeList, checkboxCombined, setStarterReqStatus)}>get
                        starter</button>)}

                {mainReqStatus === 'done' ? (error === false ? (
                    <RecipeResultDisplay
                        next={() => nextItem(mainIndex, setMainIndex)}
                        image={mainRecipeList[mainIndex].recipe.image}
                        recipeName={mainRecipeList[mainIndex].recipe.label}
                        time={mainRecipeList[mainIndex].recipe.totalTime}
                        ingredientsNumber={mainRecipeList[mainIndex].recipe.ingredients.length}
                        ingredientsList={mainRecipeList[mainIndex].recipe.ingredientLines}
                        link={mainRecipeList[mainIndex].recipe.url}
                        back={() => lastItem(mainIndex, setMainIndex)}
                    />) : (
                    <button className="get-button" onClick={() => navigate("/questionnaire")}>Sorry! No recipes found.
                        try again</button>)) : (<p>Loading...</p>)}

                {dessertReqStatus === 'done' ? (dessertRecipeList.length > 0 ? (
                        <RecipeResultDisplay
                            next={() => nextItem(dessertIndex, setDessertIndex)}
                            image={dessertRecipeList[dessertIndex].recipe.image}
                            recipeName={dessertRecipeList[dessertIndex].recipe.label}
                            time={dessertRecipeList[dessertIndex].recipe.totalTime}
                            ingredientsNumber={dessertRecipeList[dessertIndex].recipe.ingredients.length}
                            ingredientsList={dessertRecipeList[dessertIndex].recipe.ingredientLines}
                            link={dessertRecipeList[dessertIndex].recipe.url}
                            back={() => lastItem(dessertIndex, setDessertIndex)}
                        />) : (<button className="get-button">Sorry! No recipes found.</button>)
                ) : (
                    <button type="button" className="get-button"
                            onClick={() => fetchData('&dishType=desserts', cuisineType, setDessertRecipeList, checkboxCombined, setDessertReqStatus)}>get
                        dessert</button>)}
            </div>
        </div>)
}

export default RecipeQuestResult