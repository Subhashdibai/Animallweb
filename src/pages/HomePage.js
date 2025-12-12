
import React from "react";
import "../styles/HomePage.css";
import BottomNavbar from "../components/BottomNavbar";
import BuySellCard from "../components/BuySellCard";
import HomeFeatureCard from "../components/HomeFeatureCard";


export default function HomePage() {
return (
<div className="home-wrapper">
{/* Top Header */}
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
<div className="coin">0</div>
<div className="profile">1</div>
</div>
</div>


{/* Feature Boxes */}
<div className="feature-row">
<HomeFeatureCard title="Check Rate" subtitle="Correct price of cattle" />
<HomeFeatureCard title="Increase Milk" subtitle="Make Plan" />
<HomeFeatureCard title="Cattle Expert" subtitle="Get Advice" />
</div>


{/* Sell / Buy Cattle Banner */}
<div className="main-banner">
<div className="banner-left">
<img
src="login-bg.png"
alt="cow"
style={{ width: "220px", height: "180px" }}

/>
</div>
<div className="banner-right">
<h2>Buy and sell as much as you want</h2>
<button>Get a plan ₹1</button>
</div>
</div>


{/* Buy / Sell Boxes */}
{/* <div className="buy-sell-row">
<BuySellCard title="Buy Cattle" count="403+ New Cattle" 
img src="/buy.cattel.png" alt="cattel"  />

<BuySellCard title="Sell Cattle" count="987+ Buyers" 
img src="/sell.cattel.png" alt="cattel" />

</div> */}

<div className="buy-sell-row">

  <BuySellCard 
    title="Buy Cattle" 
    count="403+ New Cattle"
    img="/buy.cattel.png"
  />

  <BuySellCard 
    title="Sell Cattle" 
    count="987+ Buyers"
    img="/sell.cattel.png"
  />

</div>


{/* Education Row */}
<h3 className="edu-title">Understand every process, in an easy way!</h3>
<div className="edu-row">
<div className="edu-box">How to buy</div>
<div className="edu-box">Learn the right process</div>
<div className="edu-box">How to sell</div>
</div>


<BottomNavbar />
</div>
)
}