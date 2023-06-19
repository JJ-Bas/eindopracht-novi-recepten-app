import React, {useContext} from 'react';
import "./Home.scss"
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../Context/AuthContext/AuthContext";
import NavBar from "../../components/NavBar/NavBar";

function Home() {

    const navigate = useNavigate()

    const {isAuth} = useContext(AuthContext)




    return (

    <>
        <div className="outer-container">
            <div className="inner-container home-container">
                <h1>HEY</h1>
                <h2 className="sub-title">what to cook today?</h2>
                <article>
                <p className="intro"> your recipe matchmaker to help you pick your daily dish.</p>
                    {isAuth === false ?
                    <button type="button" className="basic-button" onClick={() => navigate("/signin")}>login</button> : <>
                    <button type="button" className="basic-button" onClick={() => navigate("/signup")}>help me pick a dish</button>
                    <button type="button" className="basic-button" onClick={() => navigate("/search-page")}>search page</button>
                        </>}
                </article>
            </div>
        </div>
    </>

)
}

export default Home;