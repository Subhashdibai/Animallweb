import React from "react";

export default function GoatExpert() {
  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>🐐 Goat Expert Advice</h1>

        <p style={subTitleStyle}>
          Get solutions to every goat farming problem through direct expert
          advice. Information related to the right breed, nutrition, diseases,
          and profit growth.
        </p>

        <ul style={listStyle}>
          <li>✔ Correct guidance on breed selection</li>
          <li>✔ Disease prevention and treatment</li>
          <li>✔ Proper nutrition and weight gain methods</li>
          <li>✔ Strategies to increase profits</li>
          <li>✔ Experienced Goat Experts</li>
        </ul>

        <div style={priceBox}>
          <span style={{ fontSize: "18px" }}>Today's Special Offer</span>
          <h2 style={{ margin: "8px 0", color: "#3730a3" }}>
            Talk to an Expert for ₹1
          </h2>
        </div>

        <button style={buttonStyle}>Talk to Expert for ₹1</button>

        <p style={noteStyle}>
          ✔ Live Consultation • ✔ Trusted • ✔ Farmer-Friendly
        </p>
      </div>
    </div>
  );
}



const pageStyle = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #eef2ff, #f5f7ff)",
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
  color: "#312e81"
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
  background: "#e0e7ff",
  padding: "15px",
  borderRadius: "12px",
  marginBottom: "20px"
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  fontSize: "18px",
  background: "linear-gradient(135deg, #4f46e5, #4338ca)",
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


// export default function GoatExpert() {
// return (
// <div style={pageStyle}>
//       <h2>Goat Expert</h2>
//       <p>Expert advice coming soon...</p>

//       <button className="action-btn">
//         Talk to Expert
//       </button>
// {/* <h1>Goat Expert</h1>
// <p>Experts से सलाह लें</p> */}
// </div>
// );
// }


// const pageStyle = {
// padding: "60px",
// background: "#eef2ff",
// height: "100vh"
// };