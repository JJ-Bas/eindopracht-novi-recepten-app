import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Input from "../../components/Input/Input";
import axios from "axios";
import styles from "./ChangeProfile.module.scss"


function ChangeProfile() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordCheck, setPasswordCheck] = useState('')

    async function changeProfileData(event, email, password, repeatedPassword) {
        event.preventDefault();
        const token = localStorage.getItem('token');
        try {
            const requestData = {};
            if (email) {
                requestData.email = email;
            }
            if (password && repeatedPassword) {
                requestData.password = password;
                requestData.repeatedPassword = repeatedPassword;
            }

            const result = await axios.put('https://frontend-educational-backend.herokuapp.com/api/user', requestData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            console.log(result.data); // handle the response data here
        } catch (e) {
            console.error(e);
        }
    }

    return (
    <div className="outer-container"><div className={"inner-container "+styles['profile-change-container'] }>
        <h2>change email</h2>
        <form  onSubmit={(event) => changeProfileData(event, email)}>
            <Input
                type='email'
                id='email'
                label='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            {email.includes("@") === true ? <p></p> : <p>dit is geen geldig email adres</p>}
            <Input type='submit' value="submit email"
                   disabled={!(email.includes("@"))}/>
            </form>
        <h2 className={styles["password-header"]}>change password</h2>
        <form onSubmit={(event) => changeProfileData(event, null, password, passwordCheck)
        }>
            <Input
                type='password'
                id='password'
                label='new password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            {password.length > 5 ? <p></p> : <p>must contain at least 6 characters</p>}
            <Input
                type='password'
                id='passwordCheck'
                label='type password again'
                value={passwordCheck}
                onChange={(e) => setPasswordCheck(e.target.value)}/>
            {(password.length > 5 && password === passwordCheck) ? <p></p> : <p>both password fields dont match</p> }
            <Input type='submit' value="submit password"
                   disabled={!(password.length > 5 && password === passwordCheck)}/>
        </form>
        <button className="basic-button" onClick={() => navigate("/profile")}>back</button>
    </div></div>
)
}

export default ChangeProfile