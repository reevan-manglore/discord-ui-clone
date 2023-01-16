import React from "react";
import { Routes, Route } from "react-router";

import LandingPage from "./pages/Landing/index.jsx";

import SignupPage from "./pages/Signup/index.jsx";

import LoginPage from "./pages/Login/index.jsx";

import Dashboard from "./pages/Dashboard/index.jsx";

import HomeActivity from "./pages/Dashboard/index/Index.jsx";
import NoFriendsFound from "./pages/Dashboard/index/NoFriendsFound.jsx";
import AddFriend from "./pages/Dashboard/index/AddFriend.jsx";

import ServerActivity from "./pages/Dashboard/server/Index.jsx";

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} >
          <Route element={<HomeActivity />}>
            <Route index element={<NoFriendsFound />} />
            <Route path="addfriend" element={<AddFriend />} />
          </Route>
          <Route path="server/:serverName" element={<ServerActivity />} />
        </Route>
      </Routes>
    </>

  );
}

export default App;



// icons is from library https://ionic.io/