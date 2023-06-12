import React, {useState} from 'react';
import axios from "axios";
import Input from "../../components/Input/Input";
import {useNavigate} from "react-router-dom";
import styles from "../SignUp/SignUp.module.scss";


function SignUp() {
    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState("")

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
        setErrorMessage("")
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
            if (e.response.status === 400) {
                setErrorMessage(e.response.data.message)
            } else if (e.response.status === 401) {
                setErrorMessage(e.response.data.message)
            } else {
                console.log(e)
            }
        }
    }

    return (
        <>
            <div className="outer-container">
                <div className={"inner-container " + styles['sign-up-container']}>
                    <h2>register</h2>
                    <form onSubmit={handleSignUp}>
                        <Input
                            type='text'
                            id='username'
                            label='name'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}/>
                        {username.length > 5 ? <p></p> : <p>must contain at least 6 characters</p>}
                        <Input
                            type='email'
                            id='email'
                            label='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                        {email.includes("@") === true ? <p></p> : <p>this email is invalid</p>}
                        <Input
                            type='password'
                            id='password'
                            label='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                        {password.length > 5 ? <p></p> : <p>must contain at least 6 characters</p>}
                        <Input type='submit' value="register"
                               disabled={!(username.length > 6 && password.length > 6 && email.includes("@"))}/>
                    </form>
                    <p>{errorMessage}</p>
                </div>
            </div>


        </>
    )
}

export default SignUp;