import React, {createContext, useState} from "react";


export const QuestionContext = createContext({});


function QuestionContextProvider({children}) {



    // voor alles wat de context moet kunnen doorgeven

    const questionContextData = {

    }


    return (
        <QuestionContext.Provider value={questionContextData}>
            {children}
        </QuestionContext.Provider>
    )
}

export default QuestionContextProvider