import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import './App.css'
import Signup from './Pages/Signup';
import Signupfarmer from './Pages/Signupfarmer';
import LoginFarmer from './Pages/LoginFarmer';
import Footer from './components/Footer';
import FarmerDashboard from './Pages/dashbord/FarmerDashboard';
import Buiseness from './Pages/buiseness';
import Login from './Pages/Login';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<LoginFarmer/>} />
          <Route path="/login/farmer" element={<Login/>} />

          <Route exact path="/signup/buyer" element={<Signup/>} />
          <Route exact path="/signup/farmer" element={<Signupfarmer/>} />
          <Route path="/dashboard" element={<FarmerDashboard/>} />
          <Route path="/buiseness" element={<Buiseness/>} />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </>
  )
}

export default App
