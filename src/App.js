import './App.css';
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Questionnaire from "./pages/Questionnaire/Questionnaire";
import RecipeQuestResult from "./pages/RecipeQuestResult/RecipeQuestResult";


function App() {
  return (
   <>
       <NavBar />
       <div>
           <Routes>
               <Route exact path="/" element={<Home />}/>
               <Route path="/profile" element={<Profile /> }/>
               <Route path="/signin" element={ <SignIn />} />
               <Route path="/signup" element={<SignUp />}/>
               <Route path="/questionnaire" element={<Questionnaire />}/>
               <Route path='/quest-results' element={<RecipeQuestResult />}/>

           </Routes>
       </div>
   </>
  );
}

export default App;
