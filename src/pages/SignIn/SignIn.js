import React, {useContext, useState}from 'react';
import axios from "axios";
import {AuthContext} from "../../Context/AuthContext/AuthContext";
import Input from "../../components/Input/Input";

function SignIn() {
    const {login} = useContext(AuthContext)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function handleSignIn(e){
        e.preventDefault()
        try{
            const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
            "username": username,
            "password" : password,
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
            <form onSubmit={handleSignIn}>
                <Input
                    type='text'
                    id='username'
                    label='naam'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
                <Input
                    type='password'
                    id='password'
                    label='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                <Input type='submit'/>
            </form>
        </>
    )
}

export default SignIn;