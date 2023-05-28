import React from 'react';
import TerraceCardDisplay from "../../components/TerraceCardDisplay/TerraceCardDisplay";
import {useNavigate} from "react-router-dom";

function QuestionnaireTerrace() {

    const navigate = useNavigate()

    return (
        <>
            <TerraceCardDisplay/>
            <button type="button" onClick={() => navigate('/questionnaire/sliders') }>next</button>
        </>
    )
}

export default QuestionnaireTerrace;