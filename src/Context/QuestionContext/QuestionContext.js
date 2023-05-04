import React, {createContext, useState} from "react";


export const QuestionContext = createContext({});


function QuestionContextProvider ({children}){
    //voor het bijhouden van des strings voor de zoek opdracht
    const [searchString, setSearchString] = useState(
        {
            fish:false,
            halal:false,
        }
    )



    // voor alles wat de context moet kunnen doorgeven
    const questionContextData = {
       key:'string'

    }


    return (
        <QuestionContext.Provider value={questionContextData}>
            {children}
        </QuestionContext.Provider>
    )
}

export default QuestionContextProvider