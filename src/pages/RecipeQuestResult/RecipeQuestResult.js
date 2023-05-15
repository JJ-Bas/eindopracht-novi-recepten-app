import React, {useContext, useEffect, useState} from "react";
import RecipeResultDisplay from "../../components/RecipeResultDisplay/RecipeResultDisplay";
import axios from "axios";
import {QuestionContext} from "../../Context/QuestionContext/QuestionContext";


function RecipeQuestResult() {

    const [status, setStatus] = useState('pending')
    const {optionList} = useContext(QuestionContext)
    const [mainRecipeList, setMainRecipeList] = useState({})
    const [starterRecipeList, setStarterRecipeList] = useState({})
    const [index, setIndex] = useState(4)

    //useEffect vuurt get request af naar de edamamAPI gebaseerd op de status van de items die uit de QuestionContext worden gehaald
    useEffect(() => {
        async function fetchData(mealType, setlist){
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


    // twee functies om door de resultaten te navigeren. werken onafhankelijk van het aantal hits

    function nextItem() {
        if (index === (mainRecipeList.hits.length -1)) {
            setIndex(0)
        } else {
            setIndex(index + 1)
            console.log(index)
            console.log(mainRecipeList)
        }
    }

    function lastItem() {
        if (index === 0) {
            setIndex(mainRecipeList.hits.length -1)
        } else {
            setIndex(index - 1)
            console.log(index)
        }
    }


    return (
        <>
            <button type='button' onClick={() => console.log(mainRecipeList)}>recipeList</button>
            {status === 'done' ?

                <RecipeResultDisplay
                    next={() => nextItem()}
                    image={mainRecipeList.hits[index].recipe.image}
                    recipeName={mainRecipeList.hits[index].recipe.label}
                    time={mainRecipeList.hits[index].recipe.totalTime}
                    ingredients={mainRecipeList.hits[index].recipe.ingredients.length}
                    back={() => lastItem()}
                /> :
                <p>Loading...</p>}


        </>
    )
}

export default RecipeQuestResult