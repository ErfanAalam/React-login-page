import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";

import "./App.css";
import {auth} from "./firebase"

function App() {

  const [ username,setusername] =useState("")

  useEffect(() =>{
    auth.onAuthStateChanged((user) =>{
      if(user) {
        setusername(user.displayName)
      }else{
        setusername("")
      }
    })
  },[])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/" element={<Home name={username} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
