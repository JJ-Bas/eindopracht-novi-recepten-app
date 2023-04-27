import React, {useState} from "react";

function CheckBox({label, setstate}) {
    const [checked, setChecked] = useState(false);
    const [fishFree, setFishFree] = useState(false);

    function handleChange(event) {
        setChecked(event.target.checked);
        if (event.target.checked) {
            setFishFree('&health=fish-free');
        } else {
            setFishFree('');
        }
    }

    return (
        <>
            <label>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                />
                {label}
            </label>
            <p>{fishFree}</p>
        </>
    )
}


export default CheckBox

/*const handleChange = (event) => {
    setChecked(event.target.checked);
    if (event.target.checked) {
        setFishFree('&health=fish-free');
    } else {
        setFishFree('');
    }
};*/
