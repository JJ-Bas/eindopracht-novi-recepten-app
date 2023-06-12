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
import rosemary from "./assets/images/rosemary.png"
import yellowPepper from "./assets/images/pepper-yellow.png"
import React from "react";


function App() {
  return (
   <>
       <NavBar />
       <div className="app-body">
           <span className="rosemary"> <img className="scale-image" src={rosemary} /></span>
           <span className="pepper"> <img className="scale-image" src={yellowPepper} /></span>
           <Routes>
               <Route exact path="/" element={<Home />}/>
               <Route path="/profile" element={<Profile /> }/>
               <Route path="/signin" element={ <SignIn />} />
               <Route path="/signup" element={<SignUp />}/>
               <Route path="/questionnaire" element={<Questionnaire />}/>
               <Route path="/questionnaire/terrace" element={<QuestionnaireTerrace />}/>
               <Route path="/questionnaire/sliders" element={<QuestionnaireSliders />}/>
               <Route path='/quest-results' element={<RecipeQuestResult />}/>
               <Route path="/search-recipes" element={<SearchPage/>}/>
               <Route path="*" element={<PageNotFound/>}/>
           </Routes>
       </div>
   </>
  );
}

export default App;
