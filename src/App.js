// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import React from "react";
// import LoginPage from "./pages/LoginPage";
// import OtpPage from "./pages/OtpPage";

// <Route path="/otp" element={<OtpPage />} />




// function App() {
// return <LoginPage />;
// }


// export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import LoginPage from "./pages/LoginPage";
import OtpPage from "./pages/OtpPage";
import HomePage from "./pages/HomePage";
import BuyCattlePage from "./pages/BuyCattlePage";
import SellCattlePage from "./pages/SellCattlePage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/otp" element={<OtpPage />} />
         <Route path="/home" element={<HomePage />} /> 
        <Route path="/buy" element={<BuyCattlePage />} />
        <Route path="/sell" element={<SellCattlePage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

