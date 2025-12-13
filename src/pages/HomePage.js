
// import React from "react";
// import "../styles/HomePage.css";
// import BottomNavbar from "../components/BottomNavbar";
// import BuySellCard from "../components/BuySellCard";
// import HomeFeatureCard from "../components/HomeFeatureCard";


// // import { useNavigate } from "react-router-dom";





// export default function HomePage() {
//   //  const navigate = useNavigate();
// return (
 
// <div className="home-wrapper">
//    <h3 className="edu-title">Understand every process, in an easy way!</h3>

//       <div className="edu-row">
//         <div className="edu-box">How to buy</div>
//         <div className="edu-box">Learn the right process</div>
//         <div className="edu-box">How to sell</div>
//       </div>
//     </div>
//  {top Headers}
// <div className="top-header">
// <div className="logo-text">
// <img
// src="/Animall.logo.svg"
// alt="Animall Logo"
// style={{ width: "70px", height: "auto" }}
// />
// <h3>Animall.in</h3>
// <p>Cow Buffalo App</p>

// </div>


// <div className="right-icons">
// {/* <div className="coin">0</div>
// <div className="profile">1</div> */}
// <div className="coin">
//   <img src="/coin.png" alt="coin" width="50" />
 
// </div>

// <div className="profile">
//   <img src="/profile.png" alt="profile" width="50"/>
// </div>

// </div>
// </div>


// {/* Feature Boxes */}
// {/* <div className="feature-row">
// <HomeFeatureCard title="Check Rate" subtitle="Correct price of cattle" />
// <HomeFeatureCard title="Increase Milk" subtitle="Make Plan" />
// <HomeFeatureCard title="Cattle Expert" subtitle="Get Advice" />
// </div> */}

// <div className="feature-row">

//   <HomeFeatureCard 
//     title="Check Rate" 
//     subtitle="Correct price of cattle" 
//     img="/checkrate.png"   
//   />

//   <HomeFeatureCard 
//     title="Increase Milk" 
//     subtitle="Make Plan" 
//     img="/increasemilk.png"
//   />

//   <HomeFeatureCard 
//     title="Cattle Expert" 
//     subtitle="Get Advice" 
//     img="/expert.png"
//   />


// </div>
// {/* <button onClick={() => navigate("/buy")} className="buy-card">

// </button>


// <button onClick={() => navigate("/sell")} className="sell-card">

// </button> */}



// {/* Sell / Buy Cattle Banner */}
// <div className="main-banner">
// <div className="banner-left">
// <img
// src="login.bg.png"
// alt="cow"
// style={{ width: "220px", height: "180px" }}

// />
// </div>
// <div className="banner-right">
// <h2>
//   Buy and sell as much as you want</h2>
// {/* <button>Get a plan ₹1</button> */}

// <button
//   style={{
//     width: "250px",
//     height: "45px",
//     backgroundColor: "#28a745",
//     color: "white",
//     border: "none",
//     borderRadius: "10px",
//     fontSize: "18px",
//     fontWeight: "bold",
//     cursor: "pointer"
//   }}
// >
//   Get a plan ₹1
// </button>
// </div>
// </div>


// {/* Buy / Sell Boxes */}
// {/* <div className="buy-sell-row">
// <BuySellCard title="Buy Cattle" count="403+ New Cattle" 
// img src="/buy.cattel.png" alt="cattel"  />

// <BuySellCard title="Sell Cattle" count="987+ Buyers" 
// img src="/sell.cattel.png" alt="cattel" />

// </div> */}

// {/* <div className="buy-sell-row">

//   <BuySellCard 
//     title="Buy Cattle" 
//     count="403+ New Cattle"
//     img="/buy.cattel.png"
//   />
//   <button onClick={() => navigate("/buy")} className="buy-card">

// </button>

//   <BuySellCard 
//     title="Sell Cattle" 
//     count="987+ Buyers"
//     img="/sell.cattel.png"
  
//   />
//   <button onClick={() => navigate("/sell")} className="sell-card">

// </button>


// </div> */}

// <div className="buy-sell-row">

//   <BuySellCard 
//     title="Buy Cattle" 
//     count="403+ New Cattle"
//     img="/buy.cattel.png"
//     link="/buy"                 
//   />

//   <BuySellCard 
//     title="Sell Cattle" 
//     count="987+ Buyers"
//     img="/sell.cattel.png"
//     link="/sell"                
//   />

// </div>


// {/* Education Row */}

// {/* <h3 className="edu-title">Understand every process, in an easy way!</h3>
// <div className="edu-row">
// <div className="edu-box">How to buy</div>
// <div className="edu-box">Learn the right process</div>
// <div className="edu-box">How to sell</div>
// </div> */}



// <BottomNavbar />
// </div>
// )
// }

import React from "react";
import "../styles/HomePage.css";
import BottomNavbar from "../components/BottomNavbar";
import BuySellCard from "../components/BuySellCard";
import HomeFeatureCard from "../components/HomeFeatureCard";
import OtherServices from "../components/OtherServices/OtherServices";
import "../styles/HomePage.css";



// import { useNavigate } from "react-router-dom";

export default function HomePage() {
  // const navigate = useNavigate();

  return (
    
    <div className="home-wrapper">

    
      {/* ===== Top Header ===== */}
      <div className="top-header">
        <div className="logo-text">
          <img
            src="/Animall.logo.svg"
            alt="Animall Logo"
            style={{ width: "70px", height: "auto" }}
          />
          <h3>Animall.in</h3>
          <p>Cow Buffalo App</p>
        </div>

        <div className="right-icons">
          <div className="coin">
            <img src="/coin.png" alt="coin" width="50" />
          </div>

          <div className="profile">
            <img src="/profile.png" alt="profile" width="50" />
          </div>
        </div>
      </div>

      {/* ===== Feature Boxes ===== */}
      <div className="feature-row">
        <HomeFeatureCard 
          title="Check Rate" 
          subtitle="Correct price of cattle" 
          img="/checkrate.png" 
        />

        <HomeFeatureCard 
          title="Increase Milk" 
          subtitle="Make Plan" 
          img="/increasemilk.png"
        />

        <HomeFeatureCard 
          title="Cattle Expert" 
          subtitle="Get Advice" 
          img="/expert.png"
        />
      </div>

      {/* ===== Main Banner ===== */}
      <div className="main-banner">
        <div className="banner-left">
          <img
            src="/login.bg.png"
            alt="cow"
            style={{ width: "220px", height: "180px" }}
          />
        </div>

        <div className="banner-right">
          <h2>Buy and sell as much as you want</h2>

          <button
            style={{
              width: "250px",
              height: "45px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Get a plan ₹1
          </button>
        </div>
      </div>

      {/* ===== Buy / Sell Cattle Boxes ===== */}
      <div className="buy-sell-row">
        <BuySellCard 
          title="Buy Cattle" 
          count="403+ New Cattle"
          img="/buy.cattel.png"
          link="/buy"
        />

        <BuySellCard 
          title="Sell Cattle" 
          count="987+ Buyers"
          img="/sell.cattel.png"
          link="/sell"
        />
      </div>
       
       <h3 className="edu-title">Understand every process, in an easy way!</h3>
       


<div className="edu-row">
  <div className="edu-box">
    <img src="/buy_cattle.png" alt="Buy Cattle" className="edu-img" />
    How to buy cattle from Animall? 
  </div>

  <div className="edu-box">
    <img src="/sell_cattle.png" alt="Sell Cattle" className="edu-img" />
     Learn the right way to sell cattle 
  </div>

  <div className="edu-box">
    <img src="/fast_sell.png" alt="Fast Sell" className="edu-img" />
    How to sell cattle in 1 day?
  </div>
</div>


      {/* <div className="edu-row">
        <div className="edu-box">
           <img src="/buy_cattle.png" alt="Buy Cattle" className="edu-img" />
          How to buy cattle from Animall? </div>
        <div className="edu-box">
          <img src="/sell_cattle.png" alt="Sell Cattle" className="edu-img" />
          Learn the right way to sell cattle</div>
        <div className="edu-box">
          <img src="/fast_sell.png" alt="Fast Sell" className="edu-img" />
          How to sell cattle in 1 day?</div>
      </div> */}

     <OtherServices />
       <BottomNavbar />
    </div>
  );
}
