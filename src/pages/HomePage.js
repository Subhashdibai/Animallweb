

import React from "react";
import "../styles/HomePage.css";
import BottomNavbar from "../components/BottomNavbar";
import BuySellCard from "../components/BuySellCard";
import HomeFeatureCard from "../components/HomeFeatureCard";
import OtherServices from "../components/OtherServices/OtherServices";
// import ServiceCards from "../components/ServiceCards";
import { useNavigate } from "react-router-dom";




// import ServiceCards from "../components/ServiceCards";

import "../styles/HomePage.css";



 //import { useNavigate } from "react-router-dom";

export default function HomePage() {
  // const navigate = useNavigate();
  const navigate = useNavigate();


  return (

    
    
    <div className="home-wrapper">

    
     
      <div className="top-header">
        <div className="logo-text">
          <img
            src="/Goat.logo.svg"
            alt="Goat Logo"
            style={{ width: "60px", height: "auto" }}
          />
          <h3>Goat App</h3>
          <p>Animall.in</p>
        </div>

        {/* <div className="right-icons">
          <div className="coin">
            <img src="/coin.png" alt="coin" width="50" />
          </div> */}
          <div className="right-icons">
   <div
    className="coin"
    onClick={() => navigate("/coins")}
    style={{ cursor: "pointer" }}
  >
    <img src="/coin.png" alt="coin" width="50" />
  
</div> 


        
          <div
  className="profile"
  onClick={() => navigate("/profile")}
  style={{ cursor: "pointer" }}
>
  <img src="/profile.png" alt="profile" width="50" />
</div>

        </div>
      </div>

     
      <div className="feature-row">
        <HomeFeatureCard 
          title="Check Rate" 
          subtitle="Correct price of cattle" 
          img="/checkrate.png"
          onClick={() => navigate("/check-rate")} 
        />

        <HomeFeatureCard 
          title="Increase Milk" 
          subtitle="Make Plan" 
          img="\increasemilk (1).png"
             onClick={() => navigate("/increase-milk")}
        />

        <HomeFeatureCard 
          title="Goat Expert" 
          subtitle="Get Advice" 
          img="/expert.png"
           onClick={() => navigate("/goat-expert")}
        />
      </div>

      {/* ===== Main Banner ===== */}
      <div className="main-banner">
        <div className="banner-left">
          <img
            src="/login-bg.png"
            alt="Goat"
            style={{ width: "220px", height: "180px" }}
          />
        </div>

        <div className="banner-right">
           {/* <h2>Buy and sell as much as you want</h2>  */}
           <h2 className="left-title">
  Buy and sell as much as you want
</h2>

                
          <button
            className="plan-btn"
  onClick={() => navigate("/plan")}
  // style={{
  //   width: "395px",
  //   height: "45px",
  //   backgroundColor: "#28a745",
  //   color: "white",
  //   border: "none",
  //   borderRadius: "10px",
  //   fontSize: "18px",
  //   fontWeight: "bold",
  //   cursor: "pointer",
  //   float: "right"
  // }}
>
  Get a plan ₹1
</button>

        </div>
      </div>

     
      <div className="buy-sell-row">
        <BuySellCard 
          title="Buy Goat" 
          count="403+ New Goat"
          img="/buy.goat.png"
          link="/buy"
        />

        <BuySellCard 
          title="Sell Goat" 
          count="987+ Buyers"
          img="/sell.goat (1).png"
          link="/sell"
           style={{ width: "200px", height: "100px" }}
          
        />
      </div>
       
       <h3 className="edu-title">Understand every process, in an easy way!</h3>
       
<div className="edu-row">
  <div
    className="edu-box"
    onClick={() => navigate("/guide/buy-goat")}
    style={{ cursor: "pointer" }}
  >
    <img src="/Buye.Goat.png" alt="Buy Goat" className="edu-img" />
    <p>How to buy Goat from Animall?</p>
  </div>

  <div
    className="edu-box"
    onClick={() => navigate("/guide/sell-goat")}
    style={{ cursor: "pointer" }}
  >
    <img src="/selll.Goat.png" alt="Sell Goat" className="edu-img" />
    <p>Learn the right way to sell Goat</p>
  </div>

  <div
    className="edu-box"
    onClick={() => navigate("/guide/sell-fast")}
    style={{ cursor: "pointer" }}
  >
    <img src="/fastt.Goat.png" alt="Fast Sell" className="edu-img" />
    <p>How to sell Goat in 1 day?</p>
  </div>
</div>


{/* <div className="edu-row">
  <div className="edu-box">
    <img src="/Buye.Goat.png" alt="Buy Goat" className="edu-img" />
    <p>How to buy Goat from Animall?</p>
  </div>

  <div className="edu-box">
    <img src="/selll.Goat.png" alt="Sell Goat" className="edu-img" />
    <p>Learn the right way to sell Goat</p>
  </div>

  <div className="edu-box">
    <img src="/fastt.Goat.png" alt="Fast Sell" className="edu-img" />
    <p>How to sell Goat in 1 day?</p>
  </div>
</div> */}



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
    {/* <ServiceCards /> */}
    {/* <ServiceCards /> */}
     <OtherServices />
       <BottomNavbar />
    </div>
  );
}
