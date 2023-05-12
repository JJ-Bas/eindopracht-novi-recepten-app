import React, { useState} from "react";
import RecipeResultDisplay from "../../components/RecipeResultDisplay/RecipeResultDisplay";
import axios from "axios";


function RecipeQuestResult() {
    const [recipeList, setRecipeList] = useState({})
    const [index, setIndex] = useState(4)

    async function fetchData() {
        try {
            const result = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=chicken&app_id=${process.env.REACT_APP_API_ID}&app_key= ${process.env.REACT_APP_API_KEY}`);
            setRecipeList(result.data);
        } catch (e) {
            console.error(e)
        }
    }



    return (
        <>

            <button type='button' onClick={() => fetchData()}>get data</button>
            <button type="button" onClick={() => console.log(recipeList)}> console.log</button>
            <button type='button' onClick={() => console.log(recipeList.hits[4].recipe.label)}>test label</button>
            <RecipeResultDisplay
                /*recipeName={recipeList.hits[index].recipe.label}
                time={recipeList.hits[index].recipe.totalTime}
                ingredients={recipeList.hits[index].recipe.ingredients.length}*/
            />
        </>
    )
}

export default RecipeQuestResult