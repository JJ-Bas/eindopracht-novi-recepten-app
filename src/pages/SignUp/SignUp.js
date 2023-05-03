import React from 'react';
import axios from "axios";


function SignUp(){

    async function testRequest (e) {
        try{
            const testResult = await axios.get('https://frontend-educational-backend.herokuapp.com/api/test/all')
            console.log(testResult)
        }
        catch(e){
            console.error(e)
        }
    }

    async function signUp (e) {
        try {
            const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', {
                "username": "jef",
                "email" : "jef@novi.nl",
                "password" : "123456",
                "role": ["user"]
            })
            console.log(result)
        }
        catch(e) {
            console.error(e)
        }
    }

    return(
        <>
            <label>
        <input type='button' onClick={() => testRequest()}/>
                testrequest
            </label>
            <label>
                <input type='button' onClick={() => signUp()}/>
                registertest
            </label>

        </>
    )
}

export default SignUp;