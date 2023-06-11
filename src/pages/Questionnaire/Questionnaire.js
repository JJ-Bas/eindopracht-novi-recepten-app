import React from 'react';
import CheckboxDisplayOptions from "../../components/CheckboxDisplayOptions/CheckboxDisplayOptions";
import {useNavigate} from "react-router-dom";
import styles from "./Questionnaire.module.scss"

function Questionnaire() {

    const navigate = useNavigate()


    return (
        <>
            <div className="outer-container">
                <div className={styles["question-container"]}>
                    <h2> allergy and dietary options</h2>
                    <CheckboxDisplayOptions/>
                    <button type="button" className="styled-button" onClick={() => navigate('/questionnaire/terrace')}>next</button>
                </div>
            </div>

        </>
    )
}

export default Questionnaire;