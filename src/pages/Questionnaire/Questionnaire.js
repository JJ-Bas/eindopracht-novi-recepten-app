import React from 'react';
import CheckboxDisplayOptions from "../../components/CheckboxDisplayOptions/CheckboxDisplayOptions";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

function Questionnaire() {

    const navigate = useNavigate()


    return (
        <>
            <div className="outer-container">
                <div className="inner-container">
                    <CheckboxDisplayOptions/>
                    <button type="button" onClick={() => navigate('/questionnaire/terrace')}>next</button>
                </div>
            </div>

        </>
    )
}

export default Questionnaire;