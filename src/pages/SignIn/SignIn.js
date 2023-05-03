import React from 'react';
import axios from "axios";

function SignIn() {

    async function signIn(){
        try{
            const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
            "username": "jef",
            "password" : "123456",
        })
            console.log(result.data)

        }
        catch (e) {
            console.error(e)
        }
    }

    return (
        <>
            <label>
                <input type='button' onClick={() => signIn()}/>
                logintest
            </label>
        </>
    )
}

export default SignIn;