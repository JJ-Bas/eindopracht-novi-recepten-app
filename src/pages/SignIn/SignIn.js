import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {AuthContext} from "../../Context/AuthContext/AuthContext";
import Input from "../../components/Input/Input";
import styles from "./SignIn.module.scss"
import {useNavigate} from "react-router-dom";


function SignIn() {

    const navigate = useNavigate()

    const {login} = useContext(AuthContext)

    const [errorMessage, setErrorMessage] = useState("")
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function handleSignIn(e) {
        e.preventDefault()
        try {
            const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                "username": username,
                "password": password,
            })
            console.log(result.data)
            login(result.data.accessToken)
        } catch (e) {
            console.error(e)
            setErrorMessage("this login is invalid")
        }
    }

    return (
        <>
            <div className="outer-container">
                <div className={"inner-container "+styles['sign-in-container'] }>
                    <h1>login</h1>
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
                        <Input type='submit'value="login"/>
                    </form>
                    <p>{errorMessage}</p>
                    <p>nog geen account?</p>
                    <button type="button" onClick={() => navigate("/signup")}>register</button>
                </div>
            </div>
        </>
    )
}

export default SignIn;