

import React from "react";
import {  Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import OtpPage from "./pages/OtpPage";
import HomePage from "./pages/HomePage";
import BuyCattlePage from "./pages/BuyCattlePage";
import SellCattlePage from "./pages/SellCattlePage";
// import Home from "./pages/Home";
import PlanPage from "./pages/PlanPage";
import ProfilePage from "./pages/ProfilePage";
import CoinsPage from "./pages/CoinsPage";




import CheckRate from "./pages/CheckRate";
import IncreaseMilk from "./pages/IncreaseMilk";
import GoatExpert from "./pages/GoatExpert";

function App() {
  return (
    //  <BrowserRouter>
      <Routes>

          {/* <Route path="/" element={<Home />} />  */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/otp" element={<OtpPage />} />
          <Route path="/plan" element={<PlanPage />} />
          <Route path="/profile" element={<ProfilePage />} />

        
         <Route path="/home" element={<HomePage />} /> 
         <Route path="/coins" element={<CoinsPage />} />


       
         <Route path="/check-rate" element={<CheckRate />} />
        <Route path="/increase-milk" element={<IncreaseMilk />} />
        <Route path="/goat-expert" element={<GoatExpert />} />

         <Route path="/buy" element={<BuyCattlePage />} />
        <Route path="/sell" element={<SellCattlePage />} />   




      </Routes>
    // </BrowserRouter> 
  );
}

export default App;






