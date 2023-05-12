import React from "react";
import {useNavigate} from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();

    return (<nav>
            <button
                type='button'
                onClick={() => navigate('/')}>
                home
            </button>
            <button
                type='button'
                onClick={() => navigate('/profile')}>
                profile
            </button>
            <button
                type='button'
                onClick={() => navigate('/questionnaire')}>
                questionnaire
            </button>
            <button
                type='button'
                onClick={() => navigate('/signin')}>
                signin
            </button>
            <button
                type='button'
                onClick={() => navigate('/signup')}>
                signup
            </button>
        <button
            type='button'
            onClick={() => navigate('/quest-results')}>
            quest-results
        </button>

        </nav>)
}

export default NavBar