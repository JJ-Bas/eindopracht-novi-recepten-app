import './App.scss';
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Questionnaire from "./pages/Questionnaire/Questionnaire";
import RecipeQuestResult from "./pages/RecipeQuestResult/RecipeQuestResult";
import QuestionnaireTerrace from "./pages/Questionnaire/QuestionnaireTerrace";
import QuestionnaireSliders from "./pages/Questionnaire/QuestionnaireSliders";
import SearchPage from "./pages/SearchPage/SearchPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import ChangeProfile from "./pages/ChangeProfile/ChangeProfile"
import rosemary from "./assets/images/rosemary.png"
import yellowPepper from "./assets/images/pepper-yellow.png"
import React, {useContext} from "react";
import {AuthContext} from "./Context/AuthContext/AuthContext";


function App() {

    const { isAuth } = useContext(AuthContext);

  return (
   <>
       <NavBar />
       <div className="app-body">
           <span className="rosemary"> <img className="scale-image" alt="rosemary" src={rosemary} /></span>
           <span className="pepper"> <img className="scale-image" alt="bell-pepper" src={yellowPepper} /></span>
           <Routes>
               <Route exact path="/" element={<Home />}/>
               <Route path="/profile" element={isAuth ? <Profile /> : <Home/> }/>
               <Route path="/signin" element={ <SignIn />} />
               <Route path="/signup" element={<SignUp />}/>
               <Route path="/questionnaire" element={isAuth ? <Questionnaire /> : <Home/>}/>
               <Route path="/questionnaire/terrace" element={<QuestionnaireTerrace />}/>
               <Route path="/questionnaire/sliders" element={<QuestionnaireSliders />}/>
               <Route path='/quest-results' element={<RecipeQuestResult />}/>
               <Route path="/search-recipes" element={isAuth ? <SearchPage/> : <Home/>}/>
               <Route path="/change-profile" element={isAuth ? <ChangeProfile/> : <Home/>}/>
               <Route path="*" element={<PageNotFound/>}/>
           </Routes>
       </div>
       <footer>
           <a id="external-link" href="https://github.com/JJ-Bas/eindopracht-novi-recepten-app" target="_blank" >Github</a>
           <a href="mailto:example@email.com">contact: example@email.com</a></footer>
   </>
  );
}

export default App;
