import React, {useContext}from 'react';
import axios from "axios";
import {AuthContext} from "../../Context/AuthContext/AuthContext";

function SignIn() {
    const {login} = useContext(AuthContext)

    async function handleSignIn(){
        try{
            const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
            "username": "jef",
            "password" : "123456",
        })
            console.log(result.data)
            login(result.data.accessToken)
        }
        catch (e) {
            console.error(e)
        }
    }

    return (
        <>
            <ul>
                <li>username: jef </li>
                <li>email : jef@novi.nl,</li>
                <li>password : 123456</li>
            </ul>
            <label>
                <input type='button' onClick={() => handleSignIn()}/>
                logintest
            </label>
        </>
    )
}

export default SignIn;