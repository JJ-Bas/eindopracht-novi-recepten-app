import React from "react";


function Input({type, id, label, onChange, value, disabled,className}) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} name={id} className={className} onChange={onChange} value={value} disabled={disabled}/>
        </>
    )
}

export default Input