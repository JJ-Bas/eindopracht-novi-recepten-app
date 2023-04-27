import React from 'react';
import {useState} from "react";
import axios from "axios";

function Home() {
    const [recipeList, setRecipeList] = useState({})

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
    </>

)
}

export default Home;