import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../../Context/AuthContext/AuthContext";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import styles from "./Profile.module.scss"
import chefHat from "../../assets/images/chef-hat.png"


function Profile() {
    const navigate = useNavigate()

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
                    setProfileData(result.data);
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

    return (<>
        <div className="outer-container">
            <div className={"inner-container " + styles["profile-container"]}>
                {status === 'done' ? <>
                    <div className={styles["profile-text"]}>
                        <h2>profile</h2>
                        <ul>
                            <li>naam: {profileData.username}
                            </li>
                            <li>email: {profileData.email}</li>
                            <li>{user.info}</li>
                            <li>{user.roles}</li>
                        </ul>
                        <button type="button" className="basic-button" onClick={() => navigate("/change-profile")}>change profile</button>
                    </div>
                    <div className={styles["profile-picture"]}>
                        <img src={chefHat} alt="chefs-hat"/>
                    </div>
                </> : <p>Loading...</p>}
            </div>
        </div>
    </>)
}

export default Profile;