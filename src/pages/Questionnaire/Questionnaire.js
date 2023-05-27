import React, {useState} from 'react';
import CheckboxDisplayOptions from "../../components/CheckboxDisplayOptions/CheckboxDisplayOptions";
import TerraceCardDisplay from "../../components/TerraceCardDisplay/TerraceCardDisplay";

function Questionnaire() {


    return (
        <>
            <input type="range" min="1" max="10"  id="preTime"/>
            <CheckboxDisplayOptions/>
            <TerraceCardDisplay/>
        </>
    )
}

export default Questionnaire;