import React from "react";
import "../styles/BuySellCattle.css";

export default function SellCattlePage() {
  return (
    <div className="sell-page">
      {/* Header */}
      <div className="sell-header">
        <h1>Sell Your Goat 🐐</h1>
        <p>Post your goat details and get buyers fast</p>
      </div>

      {/* Form Card */}
      <div className="sell-card">
        <form className="sell-form">
          <div className="form-group">
            <label>Goat Name</label>
            <input type="text" placeholder="e.g. Jamunapari Goat" required />
          </div>

          <div className="form-group">
            <label>Age (Years)</label>
            <input type="number" placeholder="e.g. 2" required />
          </div>

          <div className="form-group">
            <label>Expected Price (₹)</label>
            <input type="number" placeholder="e.g. 25000" required />
          </div>

          <div className="form-group">
            <label>Upload Goat Image</label>
            <input type="file" accept="image/*" required />
          </div>

          <button className="sell-btn" type="submit">
            📤 Upload Goat
          </button>
        </form>
      </div>
    </div>
  );
}


// import React from "react";
// import "../styles/BuySellCattle.css";


// export default function SellCattlePage() {
// return (
// <div className="page-wrapper">
// <h1>Sell Your Goat</h1>
// <p>Post your Goat details here.</p>


// <form className="sell-form">
// <input type="text" placeholder="Goat Name" required />
// <input type="number" placeholder="Age (in years)" required />
// <input type="number" placeholder="Price (₹)" required />
// <input type="file" accept="image/*" required />
// <button type="submit">Upload Cattle</button>
// </form>
// </div>
// );
// }