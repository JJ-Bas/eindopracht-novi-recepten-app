import React, {createContext} from "react";

export const QuestionContext = createContext({});


function QuestionContextProvider ({children}){

    return (
        <QuestionContext.Provider value='questionnaire'>
            {children}
        </QuestionContext.Provider>
    )
}

export default QuestionContextProvider