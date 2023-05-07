import React, {useState} from "react";

function CheckboxDisplayOptions() {
    // lijst met checkboxen die gemaakt moet worden
    const [optionList, setOptionList] = useState([
        {option: 'fish', selected: false},
        {option: 'halal', selected: true},
        {option: 'nuts', selected: false},
        ]
    )

    // functie maakt een tijdelijke variabel(temp) aan om de nieuwe status van de optie in op te slaan.
    // en geeft deze optie daarna weer terug aan de orginele lijst
    const handleChange = (selected, i) => {
        let temp = optionList[i];
        temp.selected = !selected;
        let optionListClone = [...optionList];
        optionListClone[i] = temp;
        setOptionList([...optionListClone]);
    };

    return (
        <>
        <h1>opties</h1>
            {optionList.map(({ option, selected }, i) => (
                <div key={i}>
                    <label htmlFor={i}>
                        <input
                            type="checkbox"
                            onChange={() => handleChange(selected, i)}
                            checked={selected}
                            id={i}
                        />
                        <span>{option}</span>
                    </label>
                </div>
            ))}
        </>
    )
}

export default CheckboxDisplayOptions