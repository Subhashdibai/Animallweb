
import React from "react";

export default function PlanPage() {
  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>🐄 Know the Right Price of Your Cattle</h1>

        <p style={subTitleStyle}>
          Sell your cattle at the right price with confidence. Our experts help
          you get the correct market rate and the best possible deal.
        </p>

        <ul style={listStyle}>
          <li>✔ High chances of selling cattle within 10–15 days</li>
          <li>✔ Buy and sell unlimited cattle</li>
          <li>✔ Get 999 Coins every year</li>
          <li>✔ Service available across India</li>
          <li>✔ Trusted and easy process</li>
        </ul>

        <div style={priceBox}>
          <span style={{ fontSize: "16px" }}>Annual Premium Plan</span>
          <h2 style={{ margin: "6px 0", color: "#0f766e" }}>
            ₹999 / year
          </h2>
          <p style={{ fontSize: "14px", color: "#555" }}>
            Start today for just ₹1
          </p>
        </div>

        <button style={buttonStyle}>
          Get Plan for ₹1
        </button>

        <p style={noteStyle}>
          ✔ Secure Payment • ✔ Farmer-Friendly • ✔ Trusted Service
        </p>
      </div>
    </div>
  );
}



const pageStyle = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #ecfeff, #f0fdfa)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px"
};

const cardStyle = {
  background: "#ffffff",
  width: "100%",
  maxWidth: "540px",
  borderRadius: "18px",
  padding: "35px",
  boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
  textAlign: "center"
};

const titleStyle = {
  fontSize: "28px",
  marginBottom: "12px",
  color: "#065f46"
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
  listStyle: "none",
  paddingLeft: "0"
};

const priceBox = {
  background: "#ccfbf1",
  padding: "15px",
  borderRadius: "12px",
  marginBottom: "20px"
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  fontSize: "18px",
  background: "linear-gradient(135deg, #0f766e, #115e59)",
  color: "#fff",
  border: "none",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: "600"
};

const noteStyle = {
  marginTop: "15px",
  fontSize: "13px",
  color: "#777"
};


// import React from "react";

// function PlanPage() {
//   return (
//     <div style={{ padding: "40px" }}>
//       <h2>पशु का सही रेट जानें</h2>

//       <div style={{
//         marginTop: "20px",
//         background: "#fff",
//         padding: "25px",
//         borderRadius: "10px",
//         maxWidth: "700px"
//       }}>
//         <ul>
//           <li>✔️ सभी पशु 10–15 दिन में बिक जाएंगे</li>
//           <li>✔️ जितने चाहें खरीदें / बेचें</li>
//           <li>✔️ 999 कॉइन मिलेंगे</li>
//           <li>✔️ ₹999 / साल</li>
//         </ul>

//         <button style={{
//           marginTop: "20px",
//           background: "#0f766e",
//           color: "#fff",
//           padding: "12px 25px",
//           border: "none",
//           borderRadius: "6px"
//         }}>
//           प्लान लें ₹1
//         </button>
//       </div>
//     </div>
//   );
// }

// export default PlanPage;
