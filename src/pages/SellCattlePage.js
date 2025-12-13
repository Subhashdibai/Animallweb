import React from "react";
import "../styles/BuySellCattle.css";


export default function SellCattlePage() {
return (
<div className="page-wrapper">
<h1>Sell Your Cattle</h1>
<p>Post your cattle details here.</p>


<form className="sell-form">
<input type="text" placeholder="Cattle Name" required />
<input type="number" placeholder="Age (in years)" required />
<input type="number" placeholder="Price (₹)" required />
<input type="file" accept="image/*" required />
<button type="submit">Upload Cattle</button>
</form>
</div>
);
}