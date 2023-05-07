import React, {useState} from "react";

// ...props is voor het meegeven van een disabled attribuut
function CheckBox({label, checked, onChange, i , ...props}) {

    //defaultChecked is zodat we de start status van de checkbox kunnen meegeven
    const defaultChecked = checked ? checked : false;
    const [isChecked, setIsChecked] = useState(defaultChecked);




    return (
        <>
            <div key={i}>
            <label>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={onChange}
                    {...props}
                />
                {label}
            </label>
                <p>{isChecked ? "Selected" : "Unchecked"}</p>
            </div>
        </>
    )
}


export default CheckBox
