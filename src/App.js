

import React from "react";
import {  Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import OtpPage from "./pages/OtpPage";
import HomePage from "./pages/HomePage";
import BuyCattlePage from "./pages/BuyCattlePage";
import SellCattlePage from "./pages/SellCattlePage";
// import Home from "./pages/Home";

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
        
         <Route path="/home" element={<HomePage />} /> 

       
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






// import React from "react";
// import { Routes, Route } from "react-router-dom";

// import LoginPage from "./pages/LoginPage";
// import OtpPage from "./pages/OtpPage";
// import HomePage from "./pages/HomePage";
// import BuyCattlePage from "./pages/BuyCattlePage";
// import SellCattlePage from "./pages/SellCattlePage";
// // import Home from "./pages/Home";

// import CheckRate from "./pages/CheckRate";
// import IncreaseMilk from "./pages/IncreaseMilk";
// import GoatExpert from "./pages/GoatExpert";

// function App() {
//   return (
//     <Routes>

//       {/* Default */}
//       <Route path="/" element={<LoginPage />} />

//       <Route path="/otp" element={<OtpPage />} />
//       {/* <Route path="/home" element={<Home />} /> */}
//       <Route path="/homepage" element={<HomePage />} />

//       {/* Service pages */}
//       <Route path="/check-rate" element={<CheckRate />} />
//       <Route path="/increase-milk" element={<IncreaseMilk />} />
//       <Route path="/goat-expert" element={<GoatExpert />} />

//       {/* Buy / Sell */}
//       <Route path="/buy" element={<BuyCattlePage />} />
//       <Route path="/sell" element={<SellCattlePage />} />

//     </Routes>
//   );
// }

// export default App;





// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import LoginPage from "./pages/LoginPage";
// import OtpPage from "./pages/OtpPage";
// import HomePage from "./pages/HomePage";
// import BuyCattlePage from "./pages/BuyCattlePage";
// import SellCattlePage from "./pages/SellCattlePage";
// import Home from "./pages/Home";

// import CheckRate from "./pages/CheckRate";
// import IncreaseMilk from "./pages/IncreaseMilk";
// import GoatExpert from "./pages/GoatExpert";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         {/* Auth */}
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/otp" element={<OtpPage />} />

//         {/* Main pages */}
//         <Route path="/home" element={<Home />} />
//         <Route path="/homepage" element={<HomePage />} />

//         {/* Service pages */}
//         <Route path="/check-rate" element={<CheckRate />} />
//         <Route path="/increase-milk" element={<IncreaseMilk />} />
//         <Route path="/goat-expert" element={<GoatExpert />} />

//         {/* Buy / Sell */}
//         <Route path="/buy" element={<BuyCattlePage />} />
//         <Route path="/sell" element={<SellCattlePage />} />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
