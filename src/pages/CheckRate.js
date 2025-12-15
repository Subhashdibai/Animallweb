import React from "react";

export default function CheckRate() {
  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>🐄 Know the correct rate of the Animal</h1>

        <p style={subTitleStyle}>
         Now know the right price before buying or selling an animal, with the help of experts
        </p>

        <ul style={listStyle}>
          <li>✔ Sales expected within 10–15 days</li>
          <li>✔ Unlimited Animal check Facility</li>
          <li>✔ Correct Market rates by Experts</li>
          <li>✔ 999 Coins Free Bonus</li>
          <li>✔ ₹999/year Plan</li>
        </ul>

        <div style={priceBox}>
          <span style={{ fontSize: "18px" }}>Today's Offer</span>
          <h2 style={{ margin: "8px 0", color: "#1b7f5a" }}>Get a plan for ₹1</h2>
        </div>

        <button style={buttonStyle}>Activate the Plan</button>

        <p style={noteStyle}>
          ✔ No Hidden Charges • ✔ Cancel Anytime
        </p>
      </div>
    </div>
  );
}

const pageStyle = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #e9fff8, #f6fffc)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px"
};

const cardStyle = {
  background: "#ffffff",
  width: "100%",
  maxWidth: "520px",
  borderRadius: "18px",
  padding: "35px",
  boxShadow: "0 15px 35px rgba(0,0,0,0.12)",
  textAlign: "center"
};

const titleStyle = {
  fontSize: "28px",
  marginBottom: "10px",
  color: "#0f5132"
};

const subTitleStyle = {
  fontSize: "16px",
  color: "#555",
  marginBottom: "25px",
  lineHeight: "1.6"
};

const listStyle = {
  textAlign: "left",
  marginBottom: "25px",
  fontSize: "15px",
  lineHeight: "1.9",
  color: "#333",
  paddingLeft: "0",
  listStyle: "none"
};

const priceBox = {
  background: "#e8fff6",
  padding: "15px",
  borderRadius: "12px",
  marginBottom: "20px"
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  fontSize: "18px",
  background: "linear-gradient(135deg, #2ecc71, #27ae60)",
  color: "#fff",
  border: "none",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: "600",
  transition: "0.3s"
};

const noteStyle = {
  marginTop: "15px",
  fontSize: "13px",
  color: "#777"
};




// import React from "react";


// export default function CheckRate() {
// return (
// <div style={pageStyle}>

//      <h2>पशु का सही रेट जाने</h2>
//       <ul>
//         <li>10–15 दिन में बिक्री</li>
//         <li>अनलिमिटेड पशु</li>
//         <li>999 Coins</li>
//         <li>₹999 / साल</li>
//       </ul>
//       <button className="action-btn">प्लान लें ₹1</button>
// {/* <h1>पशु का सही रेट जानें</h1>
// <p>Experts से सही price जानिए</p> */}
// </div>
// );
// }


// const pageStyle = {
// padding: "60px",
// background: "#f4fffc",
// height: "100vh"
// };