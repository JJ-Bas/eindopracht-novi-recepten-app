import React from "react";


function Input({type, id, label, onChange, value}) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} name={id} onChange={onChange} value={value}/>
        </>
    )
}

export default Input