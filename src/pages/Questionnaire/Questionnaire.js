import React from 'react';
import CheckboxDisplayOptions from "../../components/CheckboxDisplayOptions/CheckboxDisplayOptions";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

function Questionnaire() {

    const navigate = useNavigate()


    return (
        <>
            <CheckboxDisplayOptions/>
            <button type="button" onClick={() => navigate('/questionnaire/terrace') }>next</button>
        </>
    )
}

export default Questionnaire;