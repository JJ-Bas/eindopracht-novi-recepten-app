import React, {useState} from "react";

function CheckBox({label, value,OnChange}) {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <>
            <label>
                <input
                    type="checkbox"
                    checked={value}
                    onChange={OnChange}
                />
                {label}
            </label>
            <p>Is "My Value" checked? {checked.toString()}</p>
        </>
    )
}

export default CheckBox