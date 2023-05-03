import React,{createContext} from "react";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {

/*
    function login(JWT) {
        // zet de token in de Local Storage
        localStorage.setItem('token', JWT);
        // decode de token zodat we de ID van de gebruiker hebben en data kunnen ophalen voor de context
        const decoded = jwt_decode(JWT);

        // geef de ID, token en redirect-link mee aan de fetchUserData functie (staat hieronder)
        fetchUserData(decoded.sub, JWT, '/profile');
        // link de gebruiker door naar de profielpagina
        // history.push('/profile');
    }
*/

    const contextData = {
        "id": 6,
        "username": "mod3",
        "email": "mod3@novi.nl",
        "roles": [
            "ROLE_USER",
            "ROLE_MODERATOR"
        ],
        "accessToken": "eyJhJIUzUxMiJ9.eyJzdWICJleQ0OTR9.AgP4vCsgw5TMj_AQAS-J8doHqADTA",
        "tokenType": "Bearer"}


    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider