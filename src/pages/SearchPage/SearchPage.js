import React, {useContext, useState} from "react";
import Input from "../../components/Input/Input";
import axios from "axios";
import {QuestionContext} from "../../Context/QuestionContext/QuestionContext";
import styles from "./SearchPage.module.scss"
import SearchDisplayCard from "../../components/SearchDisplayCard/SearchDisplayCard";
import CheckboxDisplayOptions from "../../components/CheckboxDisplayOptions/CheckboxDisplayOptions";

function SearchPage() {

    const {checkboxCombined} = useContext(QuestionContext)

    const [optionsPopUp, toggleOptionsPopUp] = useState(false)

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

    function handleSubmit(e) {
        fetchQuery(checkboxCombined, setResult, setSearchRequestState, e)
    }

    return (<>
        <div className="outer-container">
            <div className={"inner-container " + styles["search-page-inner-container"]}>
                <div className={styles["search-bar"]}>
                    <button type="button" className="basic-button"
                            onClick={() => toggleOptionsPopUp(!optionsPopUp)}> diët options
                    </button>

                    <button type="button" onClick={() => console.log(result)} ></button>
                    {result.count === 0 ? <p>no result</p> :  <p>result!</p>}
                    <form onSubmit={handleSubmit}>
                        <Input
                            type='text'
                            id='query'
                            value={query}
                            className={styles["search-field"]}
                            onChange={(e) => setQuery(e.target.value)}/>
                        <Input type="submit" className="basic-button" value="search"/>
                    </form>
                </div>
                <div className={styles["diet-pop-up"]}>

                    {optionsPopUp === true ?
                        <><button className="basic-button" onClick={() => toggleOptionsPopUp(false) }>close</button><CheckboxDisplayOptions/></> : ""}
                </div>
                <div className={styles['result-container']}>
                    <ul>
                        {searchRequestState === "done" &&
                            result.hits.map((resultMap) => {
                                return (
                                    <SearchDisplayCard
                                        key={resultMap.recipe.shareAs}
                                        label={resultMap.recipe.label}
                                        image={resultMap.recipe.image}
                                        link={resultMap.recipe.url}
                                    />

                                )
                            })}
                        {result.count === 0 ? <p>no result</p> : <p></p>}
                    </ul>

                </div>
            </div>
        </div>

    </>)
}

export default SearchPage