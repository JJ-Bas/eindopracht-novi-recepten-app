import React, {useContext, useState} from "react";
import {QuestionContext} from "../../Context/QuestionContext/QuestionContext";

function CheckBox({label, stateValue}) {
    const {handleCheckboxChange} = useContext(QuestionContext)
    const {fishOption} = useContext(QuestionContext)
    const {setFishOption} = useContext(QuestionContext)

    const [checked, setChecked] = useState(false);
    const [searchString, setSearchString] = useState('')

    function checkBoxCheck(string) {
        handleCheckboxChange(string, setFishOption)
    }
/*
    function handleCheckboxChange(searchString,setstate) {
        setChecked(!checked)
        console.log(checked)
        if (checked === true ){
            setstate(getString)
        } else { setstate('')}
    }
*/

    return (
        <>
            <label>
                <input
                    id={label}
                    type="checkbox"
                    checked={checked}
                    onChange={() => checkBoxCheck(stateValue, fishOption)}
                />
                {label}
            </label>
            <p>test: {searchString}</p>
        </>
    )
}


export default CheckBox
