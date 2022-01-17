import React, {useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LoginForm from "./components/Login/LoginForm/Login";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ForgotForm from './components/Login/ForgotForm/Forgot';
import Home from './components/Homepage/Homepage';

function App() {
  
  return (
    <div className="App">
          <Routes>
            <Route exact path="/login" element={<LoginForm />} />
            <Route exact path="/forgot" element={<ForgotForm />} />
            <Route exact path="/home" element={<Home/>} />
          </Routes>
    </div>
  );
}

export default App;
