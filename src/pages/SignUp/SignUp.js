import React, {useState} from 'react';
import axios from "axios";
import Input from "../../components/Input/Input";


function SignUp() {
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
                <Input
                    type='email'
                    id='email'
                    label='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                <Input
                    type='password'
                    id='password'
                    label='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
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