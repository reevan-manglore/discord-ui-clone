import React from "react";
import { Routes,Route } from "react-router";

import LandingPage from "./pages/Landing/index.jsx";
import SignupPage from "./pages/Signup/index.jsx";
import LoginPage from "./pages/Login/index.jsx";
import Dashboard from "./pages/Dashboard/index.jsx";
import NoFriendsFound from "./pages/Dashboard/NoFriendsFound.jsx";
import AddFriend from "./pages/Dashboard/AddFriend.jsx";

function App() {
  return (
    <>
   
    <Routes>
      <Route path="/" element = {<LandingPage/>}/>
      <Route path="/register" element = {<SignupPage/>}/>
      <Route path="/login" element = {<LoginPage/>}/>
      <Route path="/dashboard" element = {<Dashboard/>} >
        <Route index  element = {<NoFriendsFound/>}/>
        <Route path="addfriend" element = {<AddFriend/>}/>
        
      </Route>
    </Routes>
    </>

  );
}

export default App;
