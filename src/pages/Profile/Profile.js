import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../../Context/AuthContext/AuthContext";
import axios from "axios";


function Profile() {
    const [profileData, setProfileData] = useState({})
    const [status, setStatus] = useState('pending')
    const {user} = useContext(AuthContext)
    const {logout} = useContext(AuthContext)


    useEffect(() => {
        // we halen de pagina-content op in de mounting-cycle
        async function fetchProfileData() {
            // haal de token uit de Local Storage om in het GET-request te bewijzen dat we geauthoriseerd zijn
            const token = localStorage.getItem('token');

            try {
                const result = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                setProfileData(result.data);
                setStatus('done')
            } catch (e) {
                console.error(e);
            }
        }

        fetchProfileData();
    }, [])


    return (
        <>
            {status === 'done' ?
                <div>
                    <p>profile</p>
                    <ul>
                        <li>{user.username}</li>
                        <li>{user.id}</li>
                        <li>{user.email}</li>
                        <li>{user.info}</li>
                        <li>{user.roles}</li>
                    </ul>
                    <label>
                        <input type='button' onClick={() => logout()
                        }/>
                        log out
                    </label>
                </div>
                : <p>Loading...</p>}
        </>
    )
}

export default Profile;