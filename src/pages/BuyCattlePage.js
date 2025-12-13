import React from "react";
import "../styles/BuySellCattle.css";


export default function BuyCattlePage() {
return (
<div className="page-wrapper">
   
<h1>Buy Cattle</h1>
<p>Here you can browse and buy cattle.</p>


<div className="cattle-list">
<div className="cattle-card">
<img src="\DesiCow.png" alt="Cow" />
<h3>Desi Cow</h3>
<p>Price: ₹45,000</p>
{/* <button>View Details</button> */}
<button className="view-btn">View Details</button>

</div>


<div className="cattle-card">
<img src="\JrsiCow.png" alt="Cow" />
<h3>Jersey Cow</h3>
<p>Price: ₹55,000</p>
{/* <button>View Details</button> */}
<button className="view-btn">View Details</button>

</div>
</div>
</div>
);
}