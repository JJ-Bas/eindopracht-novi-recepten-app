import React from 'react';
import {useNavigate} from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

function QuestionnaireSliders() {

    const navigate = useNavigate()

    return (
        <>
            <NavBar/>
            <input type="range" min="1" max="10" id="preTime"/>
            <button type="button" onClick={() => navigate('/quest-results')}>results</button>
        </>
    )
}

export default QuestionnaireSliders;