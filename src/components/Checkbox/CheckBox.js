import React, {useState} from "react";

function CheckBox({label, stateValue}) {
    const [checked, setChecked] = useState(false);
    const [searchString, setSearchString] = useState('')

    const handleCheckboxChange = (e) => {
        setChecked(e.target.checked);
        if (e.target.checked) {
            setSearchString(stateValue);
        } else {
            setSearchString('');
        }
    };

    return (
        <>
            <label>
                <input
                    id={label}
                    type="checkbox"
                    checked={checked}
                    value={searchString}
                    onChange={handleCheckboxChange}
                />
                {label}
            </label>
            <p>State value: {checked ? searchString : ''}</p>
        </>
    )
}


export default CheckBox
