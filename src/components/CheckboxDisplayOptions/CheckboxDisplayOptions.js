import React from "react";

import CheckBox from "../Checkbox/CheckBox";

function CheckboxDisplayOptions() {

    return (
        <>
            <CheckBox
                label='Fish-free'
                stateValue='fishsearchstring'
            />
            <CheckBox
                label='Halal'
                stateValue='halalsearchstring'/>
        </>
    )
}

export default CheckboxDisplayOptions