import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React, { useState } from 'react';
import Home from "./pages/home/Home";
 import Signup from "./pages/credentials/Signup.jsx";
 import Signin from "./pages/credentials/Signin.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import List from "./pages/list/List.jsx";


import Feedbackfunc from "./pages/feedback";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home/>}/> 
        <Route path="/hotels" element={<List/>}/>      */}
       <Route path="/signup" element={<Signup/>}/>
       <Route path="/signin" element={<Signin/>}/>
       <Route path="/profile" element={<Profile />}    />
       {/* <Route path="/feed" element={<Feedbackfunc/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
