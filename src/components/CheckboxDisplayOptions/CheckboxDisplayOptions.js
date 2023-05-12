import React, {useContext, useState} from "react";
import {QuestionContext} from "../../Context/QuestionContext/QuestionContext";

function CheckboxDisplayOptions() {

    const [requestString, setRequestString] = useState('')

    const {optionList} = useContext(QuestionContext)
    const {handleChange} = useContext(QuestionContext)
    const {createRequest} = useContext(QuestionContext)

    function goGet () {
        const queryString = createRequest(optionList)
        setRequestString(queryString)
    }


    return (
        <>
        <h1>opties</h1>
            {optionList.map(({ option, selected }, i) => (
                <div key={i}>
                    <label htmlFor={i}>
                        <input
                            type="checkbox"
                            onChange={() => handleChange(selected, i)}
                            checked={selected}
                            id={i}
                        />
                        <span>{option}</span>
                    </label>
                </div>
            ))}
            <p>{requestString}</p>
            <button type='button' onClick={() => goGet()}>testbutton</button>
            <button type='button' onClick={() => console.log(requestString)}>testbutton</button>
        </>
    )
}

export default CheckboxDisplayOptions