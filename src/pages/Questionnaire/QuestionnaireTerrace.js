import React from 'react';
import TerraceCardDisplay from "../../components/TerraceCardDisplay/TerraceCardDisplay";
import {useNavigate} from "react-router-dom";
import styles from "./Questionnaire.module.scss"

function QuestionnaireTerrace() {

    const navigate = useNavigate()

    return (
        <>
            <div className="outer-container">
                <div className={styles["question-container"]}>
            <h2>where would you like to sit?</h2>
            <TerraceCardDisplay/>
                </div>
            </div>
        </>
    )
}

export default QuestionnaireTerrace;