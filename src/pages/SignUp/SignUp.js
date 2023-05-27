import React, {useState} from 'react';
import axios from "axios";
import Input from "../../components/Input/Input";
import {useNavigate} from "react-router-dom";


function SignUp() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function testRequest(e) {
        try {
            const testResult = await axios.get('https://frontend-educational-backend.herokuapp.com/api/test/all')
            console.log(testResult)
        } catch (e) {
            console.error(e)
        }
    }

    async function handleSignUp(e) {
        e.preventDefault()
        try {
            const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', {
                "username": username,
                "email": email,
                "password": password,
                "role": ["user"]
            })
            console.log(result)
            navigate('/signin')
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <>
            <ul>
                <li>username: jef</li>
                <li>email : jef@novi.nl,</li>
                <li>password : 123456</li>
            </ul>
            <form onSubmit={handleSignUp}>
                <Input
                    type='text'
                    id='username'
                    label='naam'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
                {username > 6 ? <p></p>  : <p>je wachtwoord moet minstens 6 tekens bevatten</p>}
                <Input
                    type='email'
                    id='email'
                    label='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                {email.includes("@") === true ? <p></p>  : <p>dit is geen geldig email adres</p>}
                <Input
                    type='password'
                    id='password'
                    label='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                {password > 6 ? <p></p>  : <p>je password moet minstens 6 tekens bevatten</p>}
                <Input type='submit'/>
            </form>
            <label>
                <input type='button' onClick={() => testRequest()}/>
                testrequest
            </label>
        </>
    )
}

export default SignUp;