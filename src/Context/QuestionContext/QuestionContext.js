import React, {createContext, useState} from "react";


export const QuestionContext = createContext({});


function QuestionContextProvider({children}) {

    // lijst met checkboxen die gemaakt moet worden
    const [optionList, setOptionList] = useState([
            {option: 'fish', selected: false},
            {option: 'halal', selected: false},
            {option: 'nuts', selected: false},
        ]
    )

    // functie maakt een tijdelijke variabel(temp) aan om de nieuwe status van de optie in op te slaan.
    // en geeft deze optie daarna weer terug aan de orginele lijst
    function handleChange (selected, i) {
        let temp = optionList[i];
        temp.selected = !selected;
        let optionListClone = [...optionList];
        optionListClone[i] = temp;
        setOptionList([...optionListClone]);
    };

    // voor alles wat de context moet kunnen doorgeven

    const questionContextData = {
        optionList: optionList,
        handleChange:handleChange,
    }


    return (
        <QuestionContext.Provider value={questionContextData}>
            {children}
        </QuestionContext.Provider>
    )
}

export default QuestionContextProvider