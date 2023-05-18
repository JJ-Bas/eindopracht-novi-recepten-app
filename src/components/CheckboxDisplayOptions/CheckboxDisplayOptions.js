import React, {useContext} from "react";
import {QuestionContext} from "../../Context/QuestionContext/QuestionContext";

function CheckboxDisplayOptions() {


    //TODO -verwijder createRequest uit componentt

    const {optionList} = useContext(QuestionContext)
    const {handleChange} = useContext(QuestionContext)
    const {createRequest} = useContext(QuestionContext)



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
        </>
    )
}

export default CheckboxDisplayOptions