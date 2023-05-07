import React, {createContext, useState} from "react";


export const QuestionContext = createContext({});


function QuestionContextProvider({children}) {
    const [fishOption, setFishOption] = useState('')
    const [checked, setChecked] = useState(false)

    function handleCheckboxChange(searchString, setstate) {
        setChecked(!checked)
        if (checked === true) {
            setstate(searchString)
            console.log("dit werkt")
        } else {
            setstate('')
        }
    }


    // voor alles wat de context moet kunnen doorgeven

    const questionContextData = {
        handleCheckboxChange: handleCheckboxChange,
        fishOption: fishOption,
        setFishOption: setFishOption,

    }


    return (
        <QuestionContext.Provider value={questionContextData}>
            {children}
        </QuestionContext.Provider>
    )
}

export default QuestionContextProvider