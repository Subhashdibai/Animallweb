import React from "react";
import ServiceCard from "./ServiceCard";
import "./OtherServices.css";


export default function OtherServices() {
return (
<div className="other-services-wrapper">
    
   
{/* <h3 className="heading">Other Services</h3> */}

<h3 className="heading" style={{ textAlign: "left" }}>
  Other Services
</h3>




<div className="services-grid">
<ServiceCard
icon="https://cdn-icons-png.flaticon.com/512/3068/3068612.png"
title="Cattle Loan"
subtitle="Loan at Home"
locked={true}
/>
<ServiceCard
icon="https://cdn-icons-png.flaticon.com/512/942/942748.png"
title="Cattle Insurance"
subtitle="Cheap Insurance"
locked={true}
/>
<ServiceCard
icon="https://cdn-icons-png.flaticon.com/512/1077/1077976.png"
title="Cattle Discussion"
subtitle="Share Knowledge"
locked={false}
/>
<ServiceCard
icon="https://cdn-icons-png.flaticon.com/512/994/994193.png"
title="Play Game"
subtitle="Win Coins"
locked={true}
/>
</div>
{/* <h4>रोज़ की बात, बदले हालात</h4> */}
<h4 className="left-heading">रोज़ की बात, बदले हालात</h4>

<div className="video-box">
  
<button className="play-btn">▶</button>



 
<span>जाने भारत में पहले कितनी नस्लें होती थी</span>
 <div className="left-box"></div>
  <div className="left-box"></div>
   <div className="left-box"></div>
    <div className="left-box"></div>
     <div className="left-box"></div>
      <div className="left-box"></div>
       <div className="left-box"></div>
        <div className="left-box"></div>
         <div className="left-box"></div>
          <div className="left-box"></div>
<button className="view-btn">देखें ›</button>
</div>


{/* Banner Section */}
<div className="banner-box">
<div className="banner-text">
<h3>बेचना आसान है Animall के साथ</h3>
<button className="post-btn">पशु दर्ज करें</button>
</div>
<img
src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
alt="farmer"
/>
</div>


<p className="footer-text">BHARAT का अपना ऐप ❤️</p>
</div>
);
}