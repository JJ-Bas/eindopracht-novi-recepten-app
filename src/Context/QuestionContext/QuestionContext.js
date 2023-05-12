import React, {createContext, useState} from "react";


export const QuestionContext = createContext({});


function QuestionContextProvider({children}) {

    //tijdelijke plaatsing getStart voor coderen
    const getStart = `https://api.edamam.com/api/recipes/v2?type=public&beta=true&app_id=${process.env.REACT_APP_API_ID}&app_key= ${process.env.REACT_APP_API_KEY}`

    // lijst met checkboxen die gemaakt moet worden
    const [optionList, setOptionList] = useState([
            {option: 'Alcohol-Free', selected: false, string: '&health=alcohol-free'},
            {option: 'Celery-Free', selected: false, string: '&health=celery-free'},
            {option: 'Crustcean-Free', selected: false, string: '&health=crustacean-free'},
            {option: 'Dairy-Free', selected: false, string: '&health=dairy-free'},
        ]
    )

    // Deze functie maakt een tijdelijke variabel(temp) aan om de nieuwe status van de optie in op te slaan
    // en geeft deze optie daarna weer terug aan de orginele lijst
    function handleChange(selected, i) {
        let temp = optionList[i];
        temp.selected = !selected;
        let optionListClone = [...optionList];
        optionListClone[i] = temp;
        setOptionList([...optionListClone]);
    };

    //functie voor het aanmaken van de GET request
    function createRequest(list) {
        let requestString = '';
        let selectedOptions = [];
        for (let i = 0; i < list.length; i++) {
            if (list[i].selected === true) {
                selectedOptions.push(list[i].string)
            }
        }
        if (selectedOptions.length > 0) {
            requestString = selectedOptions.join('')
        }
        return requestString
    }

    // voor alles wat de context moet kunnen doorgeven

    const questionContextData = {
        optionList: optionList,
        handleChange: handleChange,
        createRequest: createRequest,
    }


    return (
        <QuestionContext.Provider value={questionContextData}>
            {children}
        </QuestionContext.Provider>
    )
}

export default QuestionContextProvider