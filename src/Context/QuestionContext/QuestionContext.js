import React, {createContext, useState} from "react";


export const QuestionContext = createContext({});


function QuestionContextProvider ({children}){
    const [searchStringKeys, setSearchStringKeys] = useState({})


    return (
        <QuestionContext.Provider value={{searchStringKeys}}>
            {children}
        </QuestionContext.Provider>
    )
}

export default QuestionContextProvider