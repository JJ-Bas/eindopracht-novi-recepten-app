import React, {createContext, useState, useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    //voor het bijhouden van de login gegevens
    const [isAuth, toggleIsAuth] = useState({
        isAuth:false,
        user: null,
        status: 'pending',
    })

    const navigate = useNavigate();

    //TODO - waarom faalt hier een get request?
    
    useEffect(() => {
        // haal de JWT op uit Local Storage
        const token = localStorage.getItem('token');

        // als er WEL een token is, haal dan opnieuw de gebruikersdata op
        if (token) {
            fetchUserData(token);
        } else {
            // als er GEEN token is doen we niks, en zetten we de status op 'done'
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }, []);


    function login(JWT) {
        // zet de token in de Local Storage
        localStorage.setItem('token', JWT);
        // geef token en redirect-link mee aan de fetchUserData functie
        fetchUserData( JWT, '/profile')
        // link de gebruiker door naar de profielpagina
        // history.push('/profile');
    }

    function logout() {
        localStorage.clear();
        toggleIsAuth({
            isAuth: false,
            user: null,
            status: 'done',
        });
        console.log('Gebruiker is uitgelogd!');
        navigate('/');
    }

    async function fetchUserData(token, redirectUrl) {
        try {
            // haal gebruikersdata op met de token
            const result = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            // zet de gegevens in de state
            toggleIsAuth({
                ...isAuth,
                isAuth: true,
                user: {
                    username: result.data.username,
                    email: result.data.email,
                    id: result.data.id,
                    info: result.data.info,
                    role: result.data.roles,
                },
                status: 'done',
            });

           //link na afhandeling login functie
            if (redirectUrl) {
                navigate(redirectUrl);
            }

        } catch (e) {
            console.error(e);
            // ging er iets mis? Plaatsen we geen data in de state
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }

// voor alles wat de context moet kunnen doorgeven
    const contextData = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        login:login,
        logout:logout,
}


    return (
        <AuthContext.Provider value={contextData}>
            {isAuth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider