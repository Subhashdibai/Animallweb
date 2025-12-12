import React from "react";


export default function BuySellCard({ title, count, img }) {
return (
<div className="buy-sell-card">
<h3>{title} ›</h3>
<p className="count-text">🟢 {count}</p>
{/* <img
src="https://i.ibb.co/6NWst0m/cattle.png"
alt="cattle"
className="cattle-img"
/> */}
 <img 
        src={img} 
        alt={title} 
        style={{ width: "70px", height: "auto" }}
      />
</div>
);
}