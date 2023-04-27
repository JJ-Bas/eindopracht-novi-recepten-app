import React, {useState} from 'react';
import CheckBox from "../../components/Checbox/CheckBox";

function Questionnaire(){
    const [fishFree, setFishFree] = useState(false);
    return(
        <>
        <CheckBox
        label='optietest'
        setstate={setFishFree}/>
            <p>{fishFree}</p>
        </>
    )
}

export default Questionnaire;