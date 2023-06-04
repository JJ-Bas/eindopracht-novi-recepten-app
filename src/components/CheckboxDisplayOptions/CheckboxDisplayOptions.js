import React, {useContext} from "react";
import {QuestionContext} from "../../Context/QuestionContext/QuestionContext";
import styles from './CheckboxDisplayOptions.module.scss'

function CheckboxDisplayOptions() {


    //TODO -maak een reset knop


    const {optionList} = useContext(QuestionContext)
    const {handleChange} = useContext(QuestionContext)
    const {checkboxCombined} = useContext(QuestionContext)



    return (
            <div className={styles['container-checkbox-display']}>
            {optionList.map(({ option, selected }, i) => (
                <div key={i} className={styles['checkbox-button']}>
                    <label htmlFor={i} className={styles['toggle-wrapper']}>
                        <input
                            type="checkbox"
                            onChange={() => handleChange(selected, i)}
                            checked={selected}
                            id={i}
                        />
                        <div className={styles['toggle-slider']+' '+styles['round']}>
                            <div className={styles['toggle-knob']}></div></div>
                    </label>
                    <span>{option}</span>
                </div>
            ))}
            </div>
    )
}

export default CheckboxDisplayOptions