import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../../Context/AuthContext/AuthContext";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Input from "../../components/Input/Input";
import styles from "./Profile.module.scss"


function Profile() {
    const navigate = useNavigate()
    const [changeForm, toggleChangeForm] = useState(false)
    //state voor het invullen van de profile data form
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    //popup toggle voor profile data form
    const [profileChangeForm, toggleProfileChangeForm] = useState(true)

    const [profileData, setProfileData] = useState({})
    const [status, setStatus] = useState('pending')
    const {user} = useContext(AuthContext)


    useEffect(() => {
        // we halen de pagina-content op in de mounting-cycle
        async function fetchProfileData() {
            // haal de token uit de Local Storage om in het GET-request te bewijzen dat we geauthoriseerd zijn
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const result = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user`, {
                        headers: {
                            "Content-Type": "application/json", Authorization: `Bearer ${token}`,
                        },
                    });
                    setProfileData(result);
                    setStatus('done')
                } catch (e) {
                    console.error(e);
                    if (e.response.status === 401) {
                        navigate("/signin")
                    } else {
                        console.log(e)
                    }
                }
            } else {
                navigate("/")
            }
        }

        fetchProfileData();
    }, [])

    function uploadProfilePicture () {
        console.log("upload-picture")
    }
    //TODO -maak deze functie af

    async function changeProfileData() {
        const token = localStorage.getItem('token');
        try {
            const result = await axios.put(`https://frontend-educational-backend.herokuapp.com/api/user`, {
                "username": username, "email": email, "password": password, headers: {
                    "Content-Type": "application/json", Authorization: `Bearer ${token}`,
                },
            });
            setProfileData(result.data);
            setStatus('done')
        } catch (e) {
            console.error(e);
        }
    }

    //TODO - aanpassen gebruikgegevens PUT /api/user
    // - uploaden foto


    return (<>
        <div className="outer-container">
            <div className={"inner-container " + styles["profile-container"]}>
                {status === 'done' ? <>
                    <div className={styles["profile-text"]}>
                        <h2>profile</h2>
                        <ul>
                            <li>naam: {user.username}</li>
                            <li>email: {user.email}</li>
                            <li>{user.info}</li>
                            <li>{user.roles}</li>
                        </ul>
                        <button type="button" onClick={() => toggleChangeForm(true)}>change profile</button>
                    </div>
                    <div className={styles["profile-picture"]}>
                        <input type="file" id="picture-upload"  accept="image/png, image/jpg, image/jpeg" onClick={uploadProfilePicture}/>
                    </div>
                </> : <p>Loading...</p>}

                {changeForm === true ? <div className={styles["profile-change-popup"]}>
                    <div className={styles["top-bar"]}>
                        <button type="button" onClick={() => toggleChangeForm(false)}> close </button></div>
                    <form  onSubmit={changeProfileData}>
                    <Input
                        type='text'
                        id='username'
                        label='naam'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}/>
                    {username.length > 6 ? <p></p> : <p>je naam moet minstens 6 tekens bevatten</p>}
                    <Input
                        type='email'
                        id='email'
                        label='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    {email.includes("@") === true ? <p></p> : <p>dit is geen geldig email adres</p>}
                    <Input
                        type='password'
                        id='password'
                        label='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                    {password.length > 6 ? <p></p> : <p>je password moet minstens 6 tekens bevatten</p>}
                    //TODO waarom werkt de disabled submit niet?!
                    <Input type='submit'
                           disabled={!(username.length > 6 && password.length > 6 && email.includes("@"))}/>
                </form></div> : "" }
            </div>
        </div>
    </>)
}

export default Profile;