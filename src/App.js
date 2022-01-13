import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './components/Login.component.js'
import Forgot from './components/Forgot.component.js'

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
     <div className='auth-wrapper'>
      <div className='auth-inner'>
        <Routes>
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/forgot" element={<Forgot/>} />
        </Routes>
      </div>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
