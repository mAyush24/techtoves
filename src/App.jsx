import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import './App.css'
import Signup from './Pages/Signup';
import Signupfarmer from './Pages/Signupfarmer';
import LoginFarmer from './Pages/LoginFarmer';
import Footer from './components/Footer';
import FarmerDashboard from './Pages/dashbord/FarmerDashboard';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<LoginFarmer/>} />
          <Route exact path="/signup/buyer" element={<Signup/>} />
          <Route exact path="/signup/farmer" element={<Signupfarmer/>} />
          <Route path="/dashboard" element={<FarmerDashboard/>} />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </>
  )
}

export default App
