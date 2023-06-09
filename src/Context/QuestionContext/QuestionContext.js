import React, {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";


export const QuestionContext = createContext({});


function QuestionContextProvider({children}) {

    const navigate = useNavigate()

    //TODO recipeTime interactief maken
    const [cuisineType, setCuisineType]= useState('')
    const [checkboxCombined, setCheckboxCombined] = useState('')
    const [recipeTime, setRecipeTime]= useState("&time=10-20")

    function cuisineSetter(searchstring) {
        setCuisineType(searchstring)
        navigate("/quest-results")
    }

    // lijst met checkboxen die gemaakt moet worden
    const [optionList, setOptionList] = useState([
            {option: 'alcohol-free', selected: false, string: '&health=alcohol-free'},
            {option: 'celery-free', selected: false, string: '&health=celery-free'},
            {option: 'crustcean-free', selected: false, string: '&health=crustacean-free'},
            {option: 'dairy-free', selected: false, string: '&health=dairy-free'},
            {option: 'egg-free', selected: false, string: '&health=egg-free'},
            {option: 'fish-free', selected: false, string: '&health=fish-free'},
            {option: 'gluten-free', selected: false, string: '&health=gluten-free'},
            {option: 'kosher', selected: false, string: '&health=kosher'},
            {option: 'kidney-friendly', selected: false, string: '&health=kidney-friendly'},
            {option: 'low-sugar', selected: false, string: '&health=low-sugar'},
            {option: 'lupine-free', selected: false, string: '&health=lupine-free'},
            {option: 'low-potassium', selected: false, string: '&health=low-potassium'},
            {option: 'mollusk-free', selected: false, string: '&health=mollusk-free'},
            {option: 'mustard-free', selected: false, string: '&health=mustard-free'},
            {option: 'peanut-free', selected: false, string: '&health=peanut-free'},
            {option: 'pecatarian', selected: false, string: '&health=pecatarian'},
            {option: 'pork-free', selected: false, string: '&health=pork-free'},
            {option: 'red-meat-free', selected: false, string: '&health=red-meat-free'},
            {option: 'sesame-free', selected: false, string: '&health=sesame-free'},
            {option: 'shellfish-free', selected: false, string: '&health=shellfish-free'},
            {option: 'soy-free', selected: false, string: '&health=soy-free'},
            {option: 'sulfite-free', selected: false, string: '&health=sulfite-free'},
            {option: 'tree-nut-free', selected: false, string: '&health=tree-nut-free'},
            {option: 'vegan', selected: false, string: '&health=vegan'},
            {option: 'vegetarian', selected: false, string: '&health=vegetarian'},
            {option: 'wheat-free', selected: false, string: '&health=wheat-free'},
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
        createRequest(optionList)
    }

    function resetForm() {
       for (let i = 0; i < optionList.length; i++) {
           if (optionList[i].selected === true) {
               let temp = optionList[i];
               temp.selected = false;
               let optionListClone = [...optionList];
               optionListClone[i] = temp;
               setOptionList([...optionListClone]);
           }
       }
    }

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
        }
        requestString = selectedOptions.join('')
        setCheckboxCombined(requestString)
    }


    // voor alles wat de context moet kunnen doorgeven

    //TODO - haal createRequest uit questionContextData

    const questionContextData = {
        optionList: optionList,
        handleChange: handleChange,
        createRequest: createRequest,
        cuisineType: cuisineType,
        cuisineSetter: cuisineSetter,
        checkboxCombined:checkboxCombined,
        resetForm:resetForm,
        recipeTime:recipeTime,
    }


    return (
        <QuestionContext.Provider value={questionContextData}>
            {children}
        </QuestionContext.Provider>
    )
}

export default QuestionContextProvider