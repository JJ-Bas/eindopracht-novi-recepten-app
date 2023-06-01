import React, {useContext, useState} from "react";
import Input from "../../components/Input/Input";
import axios from "axios";
import {QuestionContext} from "../../Context/QuestionContext/QuestionContext";
import styles from "../../components/RecipeResultDisplay/RecipeResultDisplay.module.scss";

function SearchPage() {

    const {checkboxCombined} = useContext(QuestionContext)

    const [result, setResult] = useState({})
    const [query, setQuery] = useState("")
    const [searchRequestState, setSearchRequestState] = useState("pending")

    async function fetchQuery(healthOptionString, setlist, setLoadingStatus, e) {
        e.preventDefault()
        try {
            const result = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&beta=true&app_id=${process.env.REACT_APP_API_ID}&app_key= ${process.env.REACT_APP_API_KEY}&q=${query}${healthOptionString}`);
            setlist(result.data);
            setLoadingStatus('done')
        } catch (e) {
            console.error(e)
        }
    }

    function handleSubmit (e) {
        fetchQuery(checkboxCombined, setResult, setSearchRequestState,e)
    }

    return (<>
            <div className="outer-container">
                <div className="inner-container">
                    <form onSubmit={handleSubmit}>
                        <Input
                            type='text'
                            id='query'
                            label='zoek'
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}/>
                        <button type="submit"> zoek</button>
                    </form>
                    <div className="results-container">
                        <button type="button" onClick={() => console.log(result)}>test log result</button>
                        {searchRequestState === "done" &&
                            result.hits.map((resultMap) => {
                                return (
                                    <article key={resultMap.recipe.label}>
                                        <img src={resultMap.recipe.image} alt={resultMap.recipe.label}/>
                                        <p>{resultMap.recipe.label}</p>
                                    </article>
                                )
                            })}
                    </div>
                </div>
            </div>

        </>)
}

export default SearchPage